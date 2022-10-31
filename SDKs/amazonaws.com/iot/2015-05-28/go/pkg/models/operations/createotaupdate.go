package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOtaUpdatePathParams struct {
	OtaUpdateID string `pathParam:"style=simple,explode=false,name=otaUpdateId"`
}

type CreateOtaUpdateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateOtaUpdateRequestBodyAwsJobAbortConfig struct {
	AbortCriteriaList []shared.AwsJobAbortCriteria `json:"abortCriteriaList,omitempty"`
}

type CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.AwsJobExponentialRolloutRate `json:"exponentialRate,omitempty"`
	MaximumPerMinute *int64                               `json:"maximumPerMinute,omitempty"`
}

type CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig struct {
	ExpiresInSec *int64 `json:"expiresInSec,omitempty"`
}

type CreateOtaUpdateRequestBodyAwsJobTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes,omitempty"`
}

type CreateOtaUpdateRequestBodyTargetSelectionEnum string

const (
	CreateOtaUpdateRequestBodyTargetSelectionEnumContinuous CreateOtaUpdateRequestBodyTargetSelectionEnum = "CONTINUOUS"
	CreateOtaUpdateRequestBodyTargetSelectionEnumSnapshot   CreateOtaUpdateRequestBodyTargetSelectionEnum = "SNAPSHOT"
)

type CreateOtaUpdateRequestBody struct {
	AdditionalParameters          map[string]string                                        `json:"additionalParameters,omitempty"`
	AwsJobAbortConfig             *CreateOtaUpdateRequestBodyAwsJobAbortConfig             `json:"awsJobAbortConfig,omitempty"`
	AwsJobExecutionsRolloutConfig *CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig `json:"awsJobExecutionsRolloutConfig,omitempty"`
	AwsJobPresignedURLConfig      *CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig      `json:"awsJobPresignedUrlConfig,omitempty"`
	AwsJobTimeoutConfig           *CreateOtaUpdateRequestBodyAwsJobTimeoutConfig           `json:"awsJobTimeoutConfig,omitempty"`
	Description                   *string                                                  `json:"description,omitempty"`
	Files                         []shared.OtaUpdateFile                                   `json:"files"`
	Protocols                     []shared.ProtocolEnum                                    `json:"protocols,omitempty"`
	RoleArn                       string                                                   `json:"roleArn"`
	Tags                          []shared.Tag                                             `json:"tags,omitempty"`
	TargetSelection               *CreateOtaUpdateRequestBodyTargetSelectionEnum           `json:"targetSelection,omitempty"`
	Targets                       []string                                                 `json:"targets"`
}

type CreateOtaUpdateRequest struct {
	PathParams CreateOtaUpdatePathParams
	Headers    CreateOtaUpdateHeaders
	Request    CreateOtaUpdateRequestBody `request:"mediaType=application/json"`
}

type CreateOtaUpdateResponse struct {
	ContentType                    string
	CreateOtaUpdateResponse        *shared.CreateOtaUpdateResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
