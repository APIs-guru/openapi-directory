package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInterconnectLoaXAmzTargetEnum string

const (
	DescribeInterconnectLoaXAmzTargetEnumOvertureServiceDescribeInterconnectLoa DescribeInterconnectLoaXAmzTargetEnum = "OvertureService.DescribeInterconnectLoa"
)

type DescribeInterconnectLoaHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInterconnectLoaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeInterconnectLoaRequest struct {
	Headers DescribeInterconnectLoaHeaders
	Request shared.DescribeInterconnectLoaRequest `request:"mediaType=application/json"`
}

type DescribeInterconnectLoaResponse struct {
	ContentType                     string
	DescribeInterconnectLoaResponse *shared.DescribeInterconnectLoaResponse
	DirectConnectClientException    *interface{}
	DirectConnectServerException    *interface{}
	StatusCode                      int64
}
