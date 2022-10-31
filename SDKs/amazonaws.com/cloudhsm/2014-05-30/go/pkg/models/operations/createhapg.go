package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHapgXAmzTargetEnum string

const (
	CreateHapgXAmzTargetEnumCloudHsmFrontendServiceCreateHapg CreateHapgXAmzTargetEnum = "CloudHsmFrontendService.CreateHapg"
)

type CreateHapgHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHapgXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateHapgRequest struct {
	Headers CreateHapgHeaders
	Request shared.CreateHapgRequest `request:"mediaType=application/json"`
}

type CreateHapgResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	CreateHapgResponse        *shared.CreateHapgResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
