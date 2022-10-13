package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTableXAmzTargetEnum string

const (
	DeleteTableXAmzTargetEnumDynamoDb20111205DeleteTable DeleteTableXAmzTargetEnum = "DynamoDB_20111205.DeleteTable"
)

type DeleteTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTableRequest struct {
	Headers DeleteTableHeaders
	Request shared.DeleteTableInput `request:"mediaType=application/json"`
}

type DeleteTableResponse struct {
	ContentType               string
	DeleteTableOutput         *shared.DeleteTableOutput
	InternalServerError       *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
