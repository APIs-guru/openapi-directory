package operations

import (
	"openapi/pkg/models/shared"
)

type GetPolicyXAmzTargetEnum string

const (
	GetPolicyXAmzTargetEnumAwsfms20180101GetPolicy GetPolicyXAmzTargetEnum = "AWSFMS_20180101.GetPolicy"
)

type GetPolicyHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetPolicyRequest struct {
	Headers GetPolicyHeaders
	Request shared.GetPolicyRequest `request:"mediaType=application/json"`
}

type GetPolicyResponse struct {
	ContentType               string
	GetPolicyResponse         *shared.GetPolicyResponse
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	InvalidTypeException      *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
