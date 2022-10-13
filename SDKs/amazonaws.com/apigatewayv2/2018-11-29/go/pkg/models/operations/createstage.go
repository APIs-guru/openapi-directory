package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStagePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateStageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStageRequestBodyAccessLogSettings struct {
	DestinationArn *string `json:"DestinationArn"`
	Format         *string `json:"Format"`
}

type CreateStageRequestBodyDefaultRouteSettings struct {
	DataTraceEnabled       *bool                    `json:"DataTraceEnabled"`
	DetailedMetricsEnabled *bool                    `json:"DetailedMetricsEnabled"`
	LoggingLevel           *shared.LoggingLevelEnum `json:"LoggingLevel"`
	ThrottlingBurstLimit   *int64                   `json:"ThrottlingBurstLimit"`
	ThrottlingRateLimit    *float64                 `json:"ThrottlingRateLimit"`
}

type CreateStageRequestBody struct {
	AccessLogSettings    *CreateStageRequestBodyAccessLogSettings    `json:"accessLogSettings"`
	AutoDeploy           *bool                                       `json:"autoDeploy"`
	ClientCertificateID  *string                                     `json:"clientCertificateId"`
	DefaultRouteSettings *CreateStageRequestBodyDefaultRouteSettings `json:"defaultRouteSettings"`
	DeploymentID         *string                                     `json:"deploymentId"`
	Description          *string                                     `json:"description"`
	RouteSettings        map[string]shared.RouteSettings             `json:"routeSettings"`
	StageName            string                                      `json:"stageName"`
	StageVariables       map[string]string                           `json:"stageVariables"`
	Tags                 map[string]string                           `json:"tags"`
}

type CreateStageRequest struct {
	PathParams CreateStagePathParams
	Headers    CreateStageHeaders
	Request    CreateStageRequestBody `request:"mediaType=application/json"`
}

type CreateStageResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateStageResponse      *shared.CreateStageResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
