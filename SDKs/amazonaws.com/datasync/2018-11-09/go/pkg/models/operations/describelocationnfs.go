package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLocationNfsXAmzTargetEnum string

const (
	DescribeLocationNfsXAmzTargetEnumFmrsServiceDescribeLocationNfs DescribeLocationNfsXAmzTargetEnum = "FmrsService.DescribeLocationNfs"
)

type DescribeLocationNfsHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLocationNfsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeLocationNfsRequest struct {
	Headers DescribeLocationNfsHeaders
	Request shared.DescribeLocationNfsRequest `request:"mediaType=application/json"`
}

type DescribeLocationNfsResponse struct {
	ContentType                 string
	DescribeLocationNfsResponse *shared.DescribeLocationNfsResponse
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	StatusCode                  int64
}
