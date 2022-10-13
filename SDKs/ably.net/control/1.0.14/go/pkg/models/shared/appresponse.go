package shared

type AppResponseStatusEnum string

const (
	AppResponseStatusEnumEnabled  AppResponseStatusEnum = "enabled"
	AppResponseStatusEnumDisabled AppResponseStatusEnum = "disabled"
)

type AppResponse struct {
	Links                  map[string]interface{} `json:"_links"`
	AccountID              *string                `json:"accountId"`
	ApnsUseSandboxEndpoint *bool                  `json:"apnsUseSandboxEndpoint"`
	ID                     *string                `json:"id"`
	Name                   *string                `json:"name"`
	Status                 *AppResponseStatusEnum `json:"status"`
	TLSOnly                *bool                  `json:"tlsOnly"`
}
