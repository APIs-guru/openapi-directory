package operations

import (
	"openapi/pkg/models/shared"
)

type SetVisibleToAllUsersXAmzTargetEnum string

const (
	SetVisibleToAllUsersXAmzTargetEnumElasticMapReduceSetVisibleToAllUsers SetVisibleToAllUsersXAmzTargetEnum = "ElasticMapReduce.SetVisibleToAllUsers"
)

type SetVisibleToAllUsersHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetVisibleToAllUsersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetVisibleToAllUsersRequest struct {
	Headers SetVisibleToAllUsersHeaders
	Request shared.SetVisibleToAllUsersInput `request:"mediaType=application/json"`
}

type SetVisibleToAllUsersResponse struct {
	ContentType         string
	InternalServerError *interface{}
	StatusCode          int64
}
