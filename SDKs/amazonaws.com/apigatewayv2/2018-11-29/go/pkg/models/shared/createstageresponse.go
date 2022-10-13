package shared

import (
	"time"
)

type CreateStageResponse struct {
	AccessLogSettings           *AccessLogSettings       `json:"AccessLogSettings"`
	APIGatewayManaged           *bool                    `json:"ApiGatewayManaged"`
	AutoDeploy                  *bool                    `json:"AutoDeploy"`
	ClientCertificateID         *string                  `json:"ClientCertificateId"`
	CreatedDate                 *time.Time               `json:"CreatedDate"`
	DefaultRouteSettings        *RouteSettings           `json:"DefaultRouteSettings"`
	DeploymentID                *string                  `json:"DeploymentId"`
	Description                 *string                  `json:"Description"`
	LastDeploymentStatusMessage *string                  `json:"LastDeploymentStatusMessage"`
	LastUpdatedDate             *time.Time               `json:"LastUpdatedDate"`
	RouteSettings               map[string]RouteSettings `json:"RouteSettings"`
	StageName                   *string                  `json:"StageName"`
	StageVariables              map[string]string        `json:"StageVariables"`
	Tags                        map[string]string        `json:"Tags"`
}
