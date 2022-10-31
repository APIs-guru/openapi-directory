package shared




type APIModelsTokenOptionsBearerActionEnum string

const (
    APIModelsTokenOptionsBearerActionEnumNone APIModelsTokenOptionsBearerActionEnum = "None"
APIModelsTokenOptionsBearerActionEnumReset APIModelsTokenOptionsBearerActionEnum = "Reset"
APIModelsTokenOptionsBearerActionEnumDisable APIModelsTokenOptionsBearerActionEnum = "Disable"
)



type APIModelsTokenOptionsMacActionEnum string

const (
    APIModelsTokenOptionsMacActionEnumNone APIModelsTokenOptionsMacActionEnum = "None"
APIModelsTokenOptionsMacActionEnumReset APIModelsTokenOptionsMacActionEnum = "Reset"
APIModelsTokenOptionsMacActionEnumDisable APIModelsTokenOptionsMacActionEnum = "Disable"
)


type APIModelsTokenOptions struct {
    BearerAction *APIModelsTokenOptionsBearerActionEnum `json:"BearerAction,omitempty" form:"name=BearerAction"`
    MacAction *APIModelsTokenOptionsMacActionEnum `json:"MACAction,omitempty" form:"name=MACAction"`
    
}

