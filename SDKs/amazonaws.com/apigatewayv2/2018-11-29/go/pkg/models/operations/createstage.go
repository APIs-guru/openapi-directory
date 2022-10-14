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
	DestinationArn *string `json:"DestinationArn,omitempty"`
	Format         *string `json:"Format,omitempty"`
}

type CreateStageRequestBodyDefaultRouteSettings struct {
	DataTraceEnabled       *bool                    `json:"DataTraceEnabled,omitempty"`
	DetailedMetricsEnabled *bool                    `json:"DetailedMetricsEnabled,omitempty"`
	LoggingLevel           *shared.LoggingLevelEnum `json:"LoggingLevel,omitempty"`
	ThrottlingBurstLimit   *int64                   `json:"ThrottlingBurstLimit,omitempty"`
	ThrottlingRateLimit    *float64                 `json:"ThrottlingRateLimit,omitempty"`
}

type CreateStageRequestBody struct {
	AccessLogSettings    *CreateStageRequestBodyAccessLogSettings    `json:"accessLogSettings,omitempty"`
	AutoDeploy           *bool                                       `json:"autoDeploy,omitempty"`
	ClientCertificateID  *string                                     `json:"clientCertificateId,omitempty"`
	DefaultRouteSettings *CreateStageRequestBodyDefaultRouteSettings `json:"defaultRouteSettings,omitempty"`
	DeploymentID         *string                                     `json:"deploymentId,omitempty"`
	Description          *string                                     `json:"description,omitempty"`
	RouteSettings        map[string]shared.RouteSettings             `json:"routeSettings,omitempty"`
	StageName            string                                      `json:"stageName"`
	StageVariables       map[string]string                           `json:"stageVariables,omitempty"`
	Tags                 map[string]string                           `json:"tags,omitempty"`
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
