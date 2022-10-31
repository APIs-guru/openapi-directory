package operations

import (
	"openapi/pkg/models/shared"
)

type PutPolicyXAmzTargetEnum string

const (
	PutPolicyXAmzTargetEnumAwsfms20180101PutPolicy PutPolicyXAmzTargetEnum = "AWSFMS_20180101.PutPolicy"
)

type PutPolicyHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutPolicyRequest struct {
	Headers PutPolicyHeaders
	Request shared.PutPolicyRequest `request:"mediaType=application/json"`
}

type PutPolicyResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidInputException     *interface{}
	InvalidOperationException *interface{}
	InvalidTypeException      *interface{}
	LimitExceededException    *interface{}
	PutPolicyResponse         *shared.PutPolicyResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
