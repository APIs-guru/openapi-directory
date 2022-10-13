package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHsmXAmzTargetEnum string

const (
	DescribeHsmXAmzTargetEnumCloudHsmFrontendServiceDescribeHsm DescribeHsmXAmzTargetEnum = "CloudHsmFrontendService.DescribeHsm"
)

type DescribeHsmHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHsmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeHsmRequest struct {
	Headers DescribeHsmHeaders
	Request shared.DescribeHsmRequest `request:"mediaType=application/json"`
}

type DescribeHsmResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	DescribeHsmResponse       *shared.DescribeHsmResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
