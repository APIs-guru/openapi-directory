package operations

import (
	"openapi/pkg/models/shared"
)

type GetAdminAccountXAmzTargetEnum string

const (
	GetAdminAccountXAmzTargetEnumAwsfms20180101GetAdminAccount GetAdminAccountXAmzTargetEnum = "AWSFMS_20180101.GetAdminAccount"
)

type GetAdminAccountHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAdminAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAdminAccountRequest struct {
	Headers GetAdminAccountHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetAdminAccountResponse struct {
	ContentType               string
	GetAdminAccountResponse   *shared.GetAdminAccountResponse
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
