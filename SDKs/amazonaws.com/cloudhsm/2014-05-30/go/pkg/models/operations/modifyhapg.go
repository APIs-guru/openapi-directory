package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyHapgXAmzTargetEnum string

const (
	ModifyHapgXAmzTargetEnumCloudHsmFrontendServiceModifyHapg ModifyHapgXAmzTargetEnum = "CloudHsmFrontendService.ModifyHapg"
)

type ModifyHapgHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyHapgXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ModifyHapgRequest struct {
	Headers ModifyHapgHeaders
	Request shared.ModifyHapgRequest `request:"mediaType=application/json"`
}

type ModifyHapgResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	InvalidRequestException   *interface{}
	ModifyHapgResponse        *shared.ModifyHapgResponse
	StatusCode                int64
}
