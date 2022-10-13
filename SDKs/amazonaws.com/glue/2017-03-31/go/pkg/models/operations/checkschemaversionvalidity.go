package operations

import (
	"openapi/pkg/models/shared"
)

type CheckSchemaVersionValidityXAmzTargetEnum string

const (
	CheckSchemaVersionValidityXAmzTargetEnumAwsGlueCheckSchemaVersionValidity CheckSchemaVersionValidityXAmzTargetEnum = "AWSGlue.CheckSchemaVersionValidity"
)

type CheckSchemaVersionValidityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckSchemaVersionValidityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CheckSchemaVersionValidityRequest struct {
	Headers CheckSchemaVersionValidityHeaders
	Request shared.CheckSchemaVersionValidityInput `request:"mediaType=application/json"`
}

type CheckSchemaVersionValidityResponse struct {
	AccessDeniedException              *interface{}
	CheckSchemaVersionValidityResponse *shared.CheckSchemaVersionValidityResponse
	ContentType                        string
	InternalServiceException           *interface{}
	InvalidInputException              *interface{}
	StatusCode                         int64
}
