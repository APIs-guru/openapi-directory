package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlobalTableXAmzTargetEnum string

const (
	UpdateGlobalTableXAmzTargetEnumDynamoDb20120810UpdateGlobalTable UpdateGlobalTableXAmzTargetEnum = "DynamoDB_20120810.UpdateGlobalTable"
)

type UpdateGlobalTableHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGlobalTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateGlobalTableRequest struct {
	Headers UpdateGlobalTableHeaders
	Request shared.UpdateGlobalTableInput `request:"mediaType=application/json"`
}

type UpdateGlobalTableResponse struct {
	ContentType                   string
	GlobalTableNotFoundException  *interface{}
	InternalServerError           *interface{}
	ReplicaAlreadyExistsException *interface{}
	ReplicaNotFoundException      *interface{}
	StatusCode                    int64
	TableNotFoundException        *interface{}
	UpdateGlobalTableOutput       *shared.UpdateGlobalTableOutput
}
