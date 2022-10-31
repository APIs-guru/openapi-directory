package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemXAmzTargetEnum string

const (
	UpdateItemXAmzTargetEnumDynamoDb20120810UpdateItem UpdateItemXAmzTargetEnum = "DynamoDB_20120810.UpdateItem"
)

type UpdateItemHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateItemRequest struct {
	Headers UpdateItemHeaders
	Request shared.UpdateItemInput `request:"mediaType=application/json"`
}

type UpdateItemResponse struct {
	ConditionalCheckFailedException          *interface{}
	ContentType                              string
	InternalServerError                      *interface{}
	ItemCollectionSizeLimitExceededException *interface{}
	ProvisionedThroughputExceededException   *interface{}
	RequestLimitExceeded                     *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	TransactionConflictException             *interface{}
	UpdateItemOutput                         *shared.UpdateItemOutput
}
