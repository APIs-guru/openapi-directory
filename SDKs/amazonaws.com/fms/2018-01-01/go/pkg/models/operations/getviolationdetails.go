package operations

import (
	"openapi/pkg/models/shared"
)

type GetViolationDetailsXAmzTargetEnum string

const (
	GetViolationDetailsXAmzTargetEnumAwsfms20180101GetViolationDetails GetViolationDetailsXAmzTargetEnum = "AWSFMS_20180101.GetViolationDetails"
)

type GetViolationDetailsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetViolationDetailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetViolationDetailsRequest struct {
	Headers GetViolationDetailsHeaders
	Request shared.GetViolationDetailsRequest `request:"mediaType=application/json"`
}

type GetViolationDetailsResponse struct {
	ContentType                 string
	GetViolationDetailsResponse *shared.GetViolationDetailsResponse
	InternalErrorException      *interface{}
	InvalidInputException       *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
