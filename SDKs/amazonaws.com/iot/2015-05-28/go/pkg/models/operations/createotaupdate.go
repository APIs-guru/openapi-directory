package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOtaUpdatePathParams struct {
	OtaUpdateID string `pathParam:"style=simple,explode=false,name=otaUpdateId"`
}

type CreateOtaUpdateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateOtaUpdateRequestBodyAwsJobAbortConfig struct {
	AbortCriteriaList []shared.AwsJobAbortCriteria `json:"abortCriteriaList"`
}

type CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig struct {
	ExponentialRate  *shared.AwsJobExponentialRolloutRate `json:"exponentialRate"`
	MaximumPerMinute *int64                               `json:"maximumPerMinute"`
}

type CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig struct {
	ExpiresInSec *int64 `json:"expiresInSec"`
}

type CreateOtaUpdateRequestBodyAwsJobTimeoutConfig struct {
	InProgressTimeoutInMinutes *int64 `json:"inProgressTimeoutInMinutes"`
}

type CreateOtaUpdateRequestBodyTargetSelectionEnum string

const (
	CreateOtaUpdateRequestBodyTargetSelectionEnumContinuous CreateOtaUpdateRequestBodyTargetSelectionEnum = "CONTINUOUS"
	CreateOtaUpdateRequestBodyTargetSelectionEnumSnapshot   CreateOtaUpdateRequestBodyTargetSelectionEnum = "SNAPSHOT"
)

type CreateOtaUpdateRequestBody struct {
	AdditionalParameters          map[string]string                                        `json:"additionalParameters"`
	AwsJobAbortConfig             *CreateOtaUpdateRequestBodyAwsJobAbortConfig             `json:"awsJobAbortConfig"`
	AwsJobExecutionsRolloutConfig *CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig `json:"awsJobExecutionsRolloutConfig"`
	AwsJobPresignedURLConfig      *CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig      `json:"awsJobPresignedUrlConfig"`
	AwsJobTimeoutConfig           *CreateOtaUpdateRequestBodyAwsJobTimeoutConfig           `json:"awsJobTimeoutConfig"`
	Description                   *string                                                  `json:"description"`
	Files                         []shared.OtaUpdateFile                                   `json:"files"`
	Protocols                     []shared.ProtocolEnum                                    `json:"protocols"`
	RoleArn                       string                                                   `json:"roleArn"`
	Tags                          []shared.Tag                                             `json:"tags"`
	TargetSelection               *CreateOtaUpdateRequestBodyTargetSelectionEnum           `json:"targetSelection"`
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
