package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTableXAmzTargetEnum string

const (
	UpdateTableXAmzTargetEnumDynamoDb20111205UpdateTable UpdateTableXAmzTargetEnum = "DynamoDB_20111205.UpdateTable"
)

type UpdateTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTableRequest struct {
	Headers UpdateTableHeaders
	Request shared.UpdateTableInput `request:"mediaType=application/json"`
}

type UpdateTableResponse struct {
	ContentType               string
	InternalServerError       *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateTableOutput         *shared.UpdateTableOutput
}
