package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInterconnectsXAmzTargetEnum string

const (
	DescribeInterconnectsXAmzTargetEnumOvertureServiceDescribeInterconnects DescribeInterconnectsXAmzTargetEnum = "OvertureService.DescribeInterconnects"
)

type DescribeInterconnectsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInterconnectsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInterconnectsRequest struct {
	Headers DescribeInterconnectsHeaders
	Request shared.DescribeInterconnectsRequest `request:"mediaType=application/json"`
}

type DescribeInterconnectsResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	Interconnects                *shared.Interconnects
	StatusCode                   int64
}
