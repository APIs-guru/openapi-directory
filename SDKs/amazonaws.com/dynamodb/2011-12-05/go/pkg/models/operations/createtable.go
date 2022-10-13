package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTableXAmzTargetEnum string

const (
	CreateTableXAmzTargetEnumDynamoDb20111205CreateTable CreateTableXAmzTargetEnum = "DynamoDB_20111205.CreateTable"
)

type CreateTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTableRequest struct {
	Headers CreateTableHeaders
	Request shared.CreateTableInput `request:"mediaType=application/json"`
}

type CreateTableResponse struct {
	ContentType            string
	CreateTableOutput      *shared.CreateTableOutput
	InternalServerError    *interface{}
	LimitExceededException *interface{}
	ResourceInUseException *interface{}
	StatusCode             int64
}
