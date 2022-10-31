package operations

import (
	"openapi/pkg/models/shared"
)

type GetProtectionStatusXAmzTargetEnum string

const (
	GetProtectionStatusXAmzTargetEnumAwsfms20180101GetProtectionStatus GetProtectionStatusXAmzTargetEnum = "AWSFMS_20180101.GetProtectionStatus"
)

type GetProtectionStatusHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetProtectionStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetProtectionStatusRequest struct {
	Headers GetProtectionStatusHeaders
	Request shared.GetProtectionStatusRequest `request:"mediaType=application/json"`
}

type GetProtectionStatusResponse struct {
	ContentType                 string
	GetProtectionStatusResponse *shared.GetProtectionStatusResponse
	InternalErrorException      *interface{}
	InvalidInputException       *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
