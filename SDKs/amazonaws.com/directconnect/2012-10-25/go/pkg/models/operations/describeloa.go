package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLoaXAmzTargetEnum string

const (
	DescribeLoaXAmzTargetEnumOvertureServiceDescribeLoa DescribeLoaXAmzTargetEnum = "OvertureService.DescribeLoa"
)

type DescribeLoaHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLoaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
