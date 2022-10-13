package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDocumentClassifierXAmzTargetEnum string

const (
	DescribeDocumentClassifierXAmzTargetEnumComprehend20171127DescribeDocumentClassifier DescribeDocumentClassifierXAmzTargetEnum = "Comprehend_20171127.DescribeDocumentClassifier"
)

type DescribeDocumentClassifierHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDocumentClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDocumentClassifierRequest struct {
	Headers DescribeDocumentClassifierHeaders
	Request shared.DescribeDocumentClassifierRequest `request:"mediaType=application/json"`
}

type DescribeDocumentClassifierResponse struct {
	ContentType                        string
	DescribeDocumentClassifierResponse *shared.DescribeDocumentClassifierResponse
	InternalServerException            *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
