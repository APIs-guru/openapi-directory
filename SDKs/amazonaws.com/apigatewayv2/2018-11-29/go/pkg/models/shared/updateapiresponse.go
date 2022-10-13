package shared

import (
	"time"
)

type UpdateAPIResponse struct {
	APIEndpoint               *string           `json:"ApiEndpoint"`
	APIGatewayManaged         *bool             `json:"ApiGatewayManaged"`
	APIID                     *string           `json:"ApiId"`
	APIKeySelectionExpression *string           `json:"ApiKeySelectionExpression"`
	CorsConfiguration         *Cors             `json:"CorsConfiguration"`
	CreatedDate               *time.Time        `json:"CreatedDate"`
	Description               *string           `json:"Description"`
	DisableExecuteAPIEndpoint *bool             `json:"DisableExecuteApiEndpoint"`
	DisableSchemaValidation   *bool             `json:"DisableSchemaValidation"`
	ImportInfo                []string          `json:"ImportInfo"`
	Name                      *string           `json:"Name"`
	ProtocolType              *ProtocolTypeEnum `json:"ProtocolType"`
	RouteSelectionExpression  *string           `json:"RouteSelectionExpression"`
	Tags                      map[string]string `json:"Tags"`
	Version                   *string           `json:"Version"`
	Warnings                  []string          `json:"Warnings"`
}
