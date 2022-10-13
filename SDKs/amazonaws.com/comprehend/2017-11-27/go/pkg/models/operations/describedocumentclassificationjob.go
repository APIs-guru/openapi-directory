package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDocumentClassificationJobXAmzTargetEnum string

const (
	DescribeDocumentClassificationJobXAmzTargetEnumComprehend20171127DescribeDocumentClassificationJob DescribeDocumentClassificationJobXAmzTargetEnum = "Comprehend_20171127.DescribeDocumentClassificationJob"
)

type DescribeDocumentClassificationJobHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDocumentClassificationJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDocumentClassificationJobRequest struct {
	Headers DescribeDocumentClassificationJobHeaders
	Request shared.DescribeDocumentClassificationJobRequest `request:"mediaType=application/json"`
}

type DescribeDocumentClassificationJobResponse struct {
	ContentType                               string
	DescribeDocumentClassificationJobResponse *shared.DescribeDocumentClassificationJobResponse
	InternalServerException                   *interface{}
	InvalidRequestException                   *interface{}
	JobNotFoundException                      *interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
}
