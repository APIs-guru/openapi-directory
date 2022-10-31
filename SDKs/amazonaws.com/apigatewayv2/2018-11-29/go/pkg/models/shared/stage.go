package shared

import (
"time")

type Stage struct {
    AccessLogSettings *AccessLogSettings `json:"AccessLogSettings,omitempty"`
    APIGatewayManaged *bool `json:"ApiGatewayManaged,omitempty"`
    AutoDeploy *bool `json:"AutoDeploy,omitempty"`
    ClientCertificateID *string `json:"ClientCertificateId,omitempty"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    DefaultRouteSettings *RouteSettings `json:"DefaultRouteSettings,omitempty"`
    DeploymentID *string `json:"DeploymentId,omitempty"`
    Description *string `json:"Description,omitempty"`
    LastDeploymentStatusMessage *string `json:"LastDeploymentStatusMessage,omitempty"`
    LastUpdatedDate *time.Time `json:"LastUpdatedDate,omitempty"`
    RouteSettings map[string]RouteSettings `json:"RouteSettings,omitempty"`
    StageName string `json:"StageName"`
    StageVariables map[string]string `json:"StageVariables,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

