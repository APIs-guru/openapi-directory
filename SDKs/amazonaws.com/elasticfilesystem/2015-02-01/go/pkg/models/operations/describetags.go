package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTagsPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type DescribeTagsQueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
}

type DescribeTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeTagsRequest struct {
	PathParams  DescribeTagsPathParams
	QueryParams DescribeTagsQueryParams
	Headers     DescribeTagsHeaders
}

type DescribeTagsResponse struct {
	BadRequest           *interface{}
	ContentType          string
	DescribeTagsResponse *shared.DescribeTagsResponse
	FileSystemNotFound   *interface{}
	InternalServerError  *interface{}
	StatusCode           int64
}
