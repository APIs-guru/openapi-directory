package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationObjectStorageXAmzTargetEnum string

const (
	DescribeLocationObjectStorageXAmzTargetEnumFmrsServiceDescribeLocationObjectStorage DescribeLocationObjectStorageXAmzTargetEnum = "FmrsService.DescribeLocationObjectStorage"
)

type DescribeLocationObjectStorageHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationObjectStorageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLocationObjectStorageRequest struct {
	Headers DescribeLocationObjectStorageHeaders
	Request shared.DescribeLocationObjectStorageRequest `request:"mediaType=application/json"`
}

type DescribeLocationObjectStorageResponse struct {
	ContentType                           string
	DescribeLocationObjectStorageResponse *shared.DescribeLocationObjectStorageResponse
	InternalException                     *interface{}
	InvalidRequestException               *interface{}
	StatusCode                            int64
}
