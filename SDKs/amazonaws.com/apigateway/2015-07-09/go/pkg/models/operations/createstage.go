package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStagePathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
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
	DeploymentID           *string           `json:"deploymentId"`
	PercentTraffic         *float64          `json:"percentTraffic"`
	StageVariableOverrides map[string]string `json:"stageVariableOverrides"`
	UseStageCache          *bool             `json:"useStageCache"`
}

type CreateStageRequestBody struct {
	CacheClusterEnabled  *bool                                       `json:"cacheClusterEnabled"`
	CacheClusterSize     *CreateStageRequestBodyCacheClusterSizeEnum `json:"cacheClusterSize"`
	CanarySettings       *CreateStageRequestBodyCanarySettings       `json:"canarySettings"`
	DeploymentID         string                                      `json:"deploymentId"`
	Description          *string                                     `json:"description"`
	DocumentationVersion *string                                     `json:"documentationVersion"`
	StageName            string                                      `json:"stageName"`
	Tags                 map[string]string                           `json:"tags"`
	TracingEnabled       *bool                                       `json:"tracingEnabled"`
	Variables            map[string]string                           `json:"variables"`
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
