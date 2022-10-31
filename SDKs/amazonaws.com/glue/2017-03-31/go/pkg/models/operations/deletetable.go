package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTableXAmzTargetEnum string

const (
	DeleteTableXAmzTargetEnumAwsGlueDeleteTable DeleteTableXAmzTargetEnum = "AWSGlue.DeleteTable"
)

type DeleteTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTableRequest struct {
	Headers DeleteTableHeaders
	Request shared.DeleteTableRequest `request:"mediaType=application/json"`
}

type DeleteTableResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteTableResponse             map[string]interface{}
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
