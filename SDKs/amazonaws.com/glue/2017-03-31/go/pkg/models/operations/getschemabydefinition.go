package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaByDefinitionXAmzTargetEnum string

const (
	GetSchemaByDefinitionXAmzTargetEnumAwsGlueGetSchemaByDefinition GetSchemaByDefinitionXAmzTargetEnum = "AWSGlue.GetSchemaByDefinition"
)

type GetSchemaByDefinitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSchemaByDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSchemaByDefinitionRequest struct {
	Headers GetSchemaByDefinitionHeaders
	Request shared.GetSchemaByDefinitionInput `request:"mediaType=application/json"`
}

type GetSchemaByDefinitionResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	EntityNotFoundException       *interface{}
	GetSchemaByDefinitionResponse *shared.GetSchemaByDefinitionResponse
	InternalServiceException      *interface{}
	InvalidInputException         *interface{}
	StatusCode                    int64
}
