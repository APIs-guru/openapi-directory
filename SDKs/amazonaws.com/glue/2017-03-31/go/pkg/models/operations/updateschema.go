package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSchemaXAmzTargetEnum string

const (
	UpdateSchemaXAmzTargetEnumAwsGlueUpdateSchema UpdateSchemaXAmzTargetEnum = "AWSGlue.UpdateSchema"
)

type UpdateSchemaHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateSchemaRequest struct {
	Headers UpdateSchemaHeaders
	Request shared.UpdateSchemaInput `request:"mediaType=application/json"`
}

type UpdateSchemaResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	StatusCode                      int64
	UpdateSchemaResponse            *shared.UpdateSchemaResponse
}
