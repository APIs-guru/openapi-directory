package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrailsXAmzTargetEnum string

const (
	DescribeTrailsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails DescribeTrailsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails"
)

type DescribeTrailsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeTrailsRequest struct {
	Headers DescribeTrailsHeaders
	Request shared.DescribeTrailsRequest `request:"mediaType=application/json"`
}

type DescribeTrailsResponse struct {
	ContentType                    string
	DescribeTrailsResponse         *shared.DescribeTrailsResponse
	InvalidTrailNameException      *interface{}
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
