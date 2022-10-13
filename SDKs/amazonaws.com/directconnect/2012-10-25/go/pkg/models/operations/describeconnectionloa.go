package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionLoaXAmzTargetEnum string

const (
	DescribeConnectionLoaXAmzTargetEnumOvertureServiceDescribeConnectionLoa DescribeConnectionLoaXAmzTargetEnum = "OvertureService.DescribeConnectionLoa"
)

type DescribeConnectionLoaHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionLoaXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConnectionLoaRequest struct {
	Headers DescribeConnectionLoaHeaders
	Request shared.DescribeConnectionLoaRequest `request:"mediaType=application/json"`
}

type DescribeConnectionLoaResponse struct {
	ContentType                   string
	DescribeConnectionLoaResponse *shared.DescribeConnectionLoaResponse
	DirectConnectClientException  *interface{}
	DirectConnectServerException  *interface{}
	StatusCode                    int64
}
