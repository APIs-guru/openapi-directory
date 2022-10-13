package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHapgXAmzTargetEnum string

const (
	DescribeHapgXAmzTargetEnumCloudHsmFrontendServiceDescribeHapg DescribeHapgXAmzTargetEnum = "CloudHsmFrontendService.DescribeHapg"
)

type DescribeHapgHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHapgXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeHapgRequest struct {
	Headers DescribeHapgHeaders
	Request shared.DescribeHapgRequest `request:"mediaType=application/json"`
}

type DescribeHapgResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	DescribeHapgResponse      *shared.DescribeHapgResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
