package shared

import (
	"time"
)

// RestAPI
// <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
type RestAPI struct {
	APIKeySource              *APIKeySourceTypeEnum  `json:"apiKeySource,omitempty"`
	BinaryMediaTypes          []string               `json:"binaryMediaTypes,omitempty"`
	CreatedDate               *time.Time             `json:"createdDate,omitempty"`
	Description               *string                `json:"description,omitempty"`
	DisableExecuteAPIEndpoint *bool                  `json:"disableExecuteApiEndpoint,omitempty"`
	EndpointConfiguration     *EndpointConfiguration `json:"endpointConfiguration,omitempty"`
	ID                        *string                `json:"id,omitempty"`
	MinimumCompressionSize    *int64                 `json:"minimumCompressionSize,omitempty"`
	Name                      *string                `json:"name,omitempty"`
	Policy                    *string                `json:"policy,omitempty"`
	Tags                      map[string]string      `json:"tags,omitempty"`
	Version                   *string                `json:"version,omitempty"`
	Warnings                  []string               `json:"warnings,omitempty"`
}
