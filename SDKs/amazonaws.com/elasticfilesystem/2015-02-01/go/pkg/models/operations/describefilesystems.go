package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFileSystemsQueryParams struct {
	CreationToken *string `queryParam:"style=form,explode=true,name=CreationToken"`
	FileSystemID  *string `queryParam:"style=form,explode=true,name=FileSystemId"`
	Marker        *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems      *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
}

type DescribeFileSystemsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeFileSystemsRequest struct {
	QueryParams DescribeFileSystemsQueryParams
	Headers     DescribeFileSystemsHeaders
}

type DescribeFileSystemsResponse struct {
	BadRequest                  *interface{}
	ContentType                 string
	DescribeFileSystemsResponse *shared.DescribeFileSystemsResponse
	FileSystemNotFound          *interface{}
	InternalServerError         *interface{}
	StatusCode                  int64
}
