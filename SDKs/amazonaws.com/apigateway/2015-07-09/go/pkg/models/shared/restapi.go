package shared

import (
	"time"
)

type RestAPI struct {
	APIKeySource              *APIKeySourceTypeEnum  `json:"apiKeySource"`
	BinaryMediaTypes          []string               `json:"binaryMediaTypes"`
	CreatedDate               *time.Time             `json:"createdDate"`
	Description               *string                `json:"description"`
	DisableExecuteAPIEndpoint *bool                  `json:"disableExecuteApiEndpoint"`
	EndpointConfiguration     *EndpointConfiguration `json:"endpointConfiguration"`
	ID                        *string                `json:"id"`
	MinimumCompressionSize    *int64                 `json:"minimumCompressionSize"`
	Name                      *string                `json:"name"`
	Policy                    *string                `json:"policy"`
	Tags                      map[string]string      `json:"tags"`
	Version                   *string                `json:"version"`
	Warnings                  []string               `json:"warnings"`
}
