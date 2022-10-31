package shared

import (
	"time"
)

type ImportAPIResponse struct {
	APIEndpoint               *string           `json:"ApiEndpoint,omitempty"`
	APIGatewayManaged         *bool             `json:"ApiGatewayManaged,omitempty"`
	APIID                     *string           `json:"ApiId,omitempty"`
	APIKeySelectionExpression *string           `json:"ApiKeySelectionExpression,omitempty"`
	CorsConfiguration         *Cors             `json:"CorsConfiguration,omitempty"`
	CreatedDate               *time.Time        `json:"CreatedDate,omitempty"`
	Description               *string           `json:"Description,omitempty"`
	DisableExecuteAPIEndpoint *bool             `json:"DisableExecuteApiEndpoint,omitempty"`
	DisableSchemaValidation   *bool             `json:"DisableSchemaValidation,omitempty"`
	ImportInfo                []string          `json:"ImportInfo,omitempty"`
	Name                      *string           `json:"Name,omitempty"`
	ProtocolType              *ProtocolTypeEnum `json:"ProtocolType,omitempty"`
	RouteSelectionExpression  *string           `json:"RouteSelectionExpression,omitempty"`
	Tags                      map[string]string `json:"Tags,omitempty"`
	Version                   *string           `json:"Version,omitempty"`
	Warnings                  []string          `json:"Warnings,omitempty"`
}
