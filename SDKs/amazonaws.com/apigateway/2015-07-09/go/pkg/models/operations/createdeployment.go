package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDeploymentRequestBodyCacheClusterSizeEnum string

const (
	CreateDeploymentRequestBodyCacheClusterSizeEnumZero5                    CreateDeploymentRequestBodyCacheClusterSizeEnum = "0.5"
	CreateDeploymentRequestBodyCacheClusterSizeEnumOne6                     CreateDeploymentRequestBodyCacheClusterSizeEnum = "1.6"
	CreateDeploymentRequestBodyCacheClusterSizeEnumSix1                     CreateDeploymentRequestBodyCacheClusterSizeEnum = "6.1"
	CreateDeploymentRequestBodyCacheClusterSizeEnumThirteen5                CreateDeploymentRequestBodyCacheClusterSizeEnum = "13.5"
	CreateDeploymentRequestBodyCacheClusterSizeEnumTwentyEight4             CreateDeploymentRequestBodyCacheClusterSizeEnum = "28.4"
	CreateDeploymentRequestBodyCacheClusterSizeEnumFiftyEight2              CreateDeploymentRequestBodyCacheClusterSizeEnum = "58.2"
	CreateDeploymentRequestBodyCacheClusterSizeEnumOneHundredAndEighteen    CreateDeploymentRequestBodyCacheClusterSizeEnum = "118"
	CreateDeploymentRequestBodyCacheClusterSizeEnumTwoHundredAndThirtySeven CreateDeploymentRequestBodyCacheClusterSizeEnum = "237"
)

type CreateDeploymentRequestBodyCanarySettings struct {
	PercentTraffic         *float64          `json:"percentTraffic,omitempty"`
	StageVariableOverrides map[string]string `json:"stageVariableOverrides,omitempty"`
	UseStageCache          *bool             `json:"useStageCache,omitempty"`
}

type CreateDeploymentRequestBody struct {
	CacheClusterEnabled *bool                                            `json:"cacheClusterEnabled,omitempty"`
	CacheClusterSize    *CreateDeploymentRequestBodyCacheClusterSizeEnum `json:"cacheClusterSize,omitempty"`
	CanarySettings      *CreateDeploymentRequestBodyCanarySettings       `json:"canarySettings,omitempty"`
	Description         *string                                          `json:"description,omitempty"`
	StageDescription    *string                                          `json:"stageDescription,omitempty"`
	StageName           *string                                          `json:"stageName,omitempty"`
	TracingEnabled      *bool                                            `json:"tracingEnabled,omitempty"`
	Variables           map[string]string                                `json:"variables,omitempty"`
}

type CreateDeploymentRequest struct {
	PathParams CreateDeploymentPathParams
	Headers    CreateDeploymentHeaders
	Request    CreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	Deployment                  *shared.Deployment
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
	UnauthorizedException       *interface{}
}
