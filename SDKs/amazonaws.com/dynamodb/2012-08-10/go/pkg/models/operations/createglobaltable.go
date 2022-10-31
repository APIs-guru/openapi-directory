package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGlobalTableXAmzTargetEnum string

const (
	CreateGlobalTableXAmzTargetEnumDynamoDb20120810CreateGlobalTable CreateGlobalTableXAmzTargetEnum = "DynamoDB_20120810.CreateGlobalTable"
)

type CreateGlobalTableHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGlobalTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateGlobalTableRequest struct {
	Headers CreateGlobalTableHeaders
	Request shared.CreateGlobalTableInput `request:"mediaType=application/json"`
}

type CreateGlobalTableResponse struct {
	ContentType                       string
	CreateGlobalTableOutput           *shared.CreateGlobalTableOutput
	GlobalTableAlreadyExistsException *interface{}
	InternalServerError               *interface{}
	LimitExceededException            *interface{}
	StatusCode                        int64
	TableNotFoundException            *interface{}
}
