package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLoaXAmzTargetEnum string

const (
	DescribeLoaXAmzTargetEnumOvertureServiceDescribeLoa DescribeLoaXAmzTargetEnum = "OvertureService.DescribeLoa"
)

type DescribeLoaHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLoaXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLoaRequest struct {
	Headers DescribeLoaHeaders
	Request shared.DescribeLoaRequest `request:"mediaType=application/json"`
}

type DescribeLoaResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	Loa                          *shared.Loa
	StatusCode                   int64
}
