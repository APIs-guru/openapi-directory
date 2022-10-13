package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSessionsXAmzTargetEnum string

const (
	DescribeSessionsXAmzTargetEnumPhotonAdminProxyServiceDescribeSessions DescribeSessionsXAmzTargetEnum = "PhotonAdminProxyService.DescribeSessions"
)

type DescribeSessionsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSessionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSessionsRequest struct {
	Headers DescribeSessionsHeaders
	Request shared.DescribeSessionsRequest `request:"mediaType=application/json"`
}

type DescribeSessionsResponse struct {
	ContentType                          string
	DescribeSessionsResult               *shared.DescribeSessionsResult
	InvalidParameterCombinationException *interface{}
	StatusCode                           int64
}
