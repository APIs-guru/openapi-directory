package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStagePathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	StageName string `pathParam:"style=simple,explode=false,name=stageName"`
}

type UpdateStageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateStageRequestBodyAccessLogSettings struct {
	DestinationArn *string `json:"DestinationArn"`
	Format         *string `json:"Format"`
}

type UpdateStageRequestBodyDefaultRouteSettings struct {
	DataTraceEnabled       *bool                    `json:"DataTraceEnabled"`
	DetailedMetricsEnabled *bool                    `json:"DetailedMetricsEnabled"`
	LoggingLevel           *shared.LoggingLevelEnum `json:"LoggingLevel"`
	ThrottlingBurstLimit   *int64                   `json:"ThrottlingBurstLimit"`
	ThrottlingRateLimit    *float64                 `json:"ThrottlingRateLimit"`
}

type UpdateStageRequestBody struct {
	AccessLogSettings    *UpdateStageRequestBodyAccessLogSettings    `json:"accessLogSettings"`
	AutoDeploy           *bool                                       `json:"autoDeploy"`
	ClientCertificateID  *string                                     `json:"clientCertificateId"`
	DefaultRouteSettings *UpdateStageRequestBodyDefaultRouteSettings `json:"defaultRouteSettings"`
	DeploymentID         *string                                     `json:"deploymentId"`
	Description          *string                                     `json:"description"`
	RouteSettings        map[string]shared.RouteSettings             `json:"routeSettings"`
	StageVariables       map[string]string                           `json:"stageVariables"`
}

type UpdateStageRequest struct {
	PathParams UpdateStagePathParams
	Headers    UpdateStageHeaders
	Request    UpdateStageRequestBody `request:"mediaType=application/json"`
}

type UpdateStageResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateStageResponse      *shared.UpdateStageResponse
}
