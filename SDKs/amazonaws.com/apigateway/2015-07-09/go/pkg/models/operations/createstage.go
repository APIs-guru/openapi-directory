package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStagePathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateStageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateStageRequestBodyCacheClusterSizeEnum string

const (
	CreateStageRequestBodyCacheClusterSizeEnumZero5                    CreateStageRequestBodyCacheClusterSizeEnum = "0.5"
	CreateStageRequestBodyCacheClusterSizeEnumOne6                     CreateStageRequestBodyCacheClusterSizeEnum = "1.6"
	CreateStageRequestBodyCacheClusterSizeEnumSix1                     CreateStageRequestBodyCacheClusterSizeEnum = "6.1"
	CreateStageRequestBodyCacheClusterSizeEnumThirteen5                CreateStageRequestBodyCacheClusterSizeEnum = "13.5"
	CreateStageRequestBodyCacheClusterSizeEnumTwentyEight4             CreateStageRequestBodyCacheClusterSizeEnum = "28.4"
	CreateStageRequestBodyCacheClusterSizeEnumFiftyEight2              CreateStageRequestBodyCacheClusterSizeEnum = "58.2"
	CreateStageRequestBodyCacheClusterSizeEnumOneHundredAndEighteen    CreateStageRequestBodyCacheClusterSizeEnum = "118"
	CreateStageRequestBodyCacheClusterSizeEnumTwoHundredAndThirtySeven CreateStageRequestBodyCacheClusterSizeEnum = "237"
)

type CreateStageRequestBodyCanarySettings struct {
	DeploymentID           *string           `json:"deploymentId,omitempty"`
	PercentTraffic         *float64          `json:"percentTraffic,omitempty"`
	StageVariableOverrides map[string]string `json:"stageVariableOverrides,omitempty"`
	UseStageCache          *bool             `json:"useStageCache,omitempty"`
}

type CreateStageRequestBody struct {
	CacheClusterEnabled  *bool                                       `json:"cacheClusterEnabled,omitempty"`
	CacheClusterSize     *CreateStageRequestBodyCacheClusterSizeEnum `json:"cacheClusterSize,omitempty"`
	CanarySettings       *CreateStageRequestBodyCanarySettings       `json:"canarySettings,omitempty"`
	DeploymentID         string                                      `json:"deploymentId"`
	Description          *string                                     `json:"description,omitempty"`
	DocumentationVersion *string                                     `json:"documentationVersion,omitempty"`
	StageName            string                                      `json:"stageName"`
	Tags                 map[string]string                           `json:"tags,omitempty"`
	TracingEnabled       *bool                                       `json:"tracingEnabled,omitempty"`
	Variables            map[string]string                           `json:"variables,omitempty"`
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
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	Stage                    *shared.Stage
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
