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
	BearerAction *APIModelsCredentialsBearerActionEnum `json:"BearerAction,omitempty" form:"name=BearerAction"`
	MacAction    *APIModelsCredentialsMacActionEnum    `json:"MACAction,omitempty" form:"name=MACAction"`
	Password     string                                `json:"password" form:"name=password"`
	Username     string                                `json:"username" form:"name=username"`
}
