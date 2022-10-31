package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum string

const (
	DescribeDirectConnectGatewayAttachmentsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAttachments DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum = "OvertureService.DescribeDirectConnectGatewayAttachments"
)

type DescribeDirectConnectGatewayAttachmentsHeaders struct {
	XAmzAlgorithm     *string                                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeDirectConnectGatewayAttachmentsRequest struct {
	Headers DescribeDirectConnectGatewayAttachmentsHeaders
	Request shared.DescribeDirectConnectGatewayAttachmentsRequest `request:"mediaType=application/json"`
}

type DescribeDirectConnectGatewayAttachmentsResponse struct {
	ContentType                                   string
	DescribeDirectConnectGatewayAttachmentsResult *shared.DescribeDirectConnectGatewayAttachmentsResult
	DirectConnectClientException                  *interface{}
	DirectConnectServerException                  *interface{}
	StatusCode                                    int64
}
