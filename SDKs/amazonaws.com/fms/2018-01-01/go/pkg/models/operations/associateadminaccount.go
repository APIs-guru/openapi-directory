package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateAdminAccountXAmzTargetEnum string

const (
	AssociateAdminAccountXAmzTargetEnumAwsfms20180101AssociateAdminAccount AssociateAdminAccountXAmzTargetEnum = "AWSFMS_20180101.AssociateAdminAccount"
)

type AssociateAdminAccountHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateAdminAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateAdminAccountRequest struct {
	Headers AssociateAdminAccountHeaders
	Request shared.AssociateAdminAccountRequest `request:"mediaType=application/json"`
}

type AssociateAdminAccountResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidInputException     *interface{}
	InvalidOperationException *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
