package shared

type APIModelsCredentialsBearerActionEnum string

const (
	APIModelsCredentialsBearerActionEnumNone    APIModelsCredentialsBearerActionEnum = "None"
	APIModelsCredentialsBearerActionEnumReset   APIModelsCredentialsBearerActionEnum = "Reset"
	APIModelsCredentialsBearerActionEnumDisable APIModelsCredentialsBearerActionEnum = "Disable"
)

type APIModelsCredentialsMacActionEnum string

const (
	APIModelsCredentialsMacActionEnumNone    APIModelsCredentialsMacActionEnum = "None"
	APIModelsCredentialsMacActionEnumReset   APIModelsCredentialsMacActionEnum = "Reset"
	APIModelsCredentialsMacActionEnumDisable APIModelsCredentialsMacActionEnum = "Disable"
)

type APIModelsCredentials struct {
	BearerAction *APIModelsCredentialsBearerActionEnum `json:"BearerAction" form:"name=BearerAction"`
	MacAction    *APIModelsCredentialsMacActionEnum    `json:"MACAction" form:"name=MACAction"`
	Password     string                                `json:"password" form:"name=password"`
	Username     string                                `json:"username" form:"name=username"`
}
