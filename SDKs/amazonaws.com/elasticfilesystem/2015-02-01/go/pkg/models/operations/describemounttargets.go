package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMountTargetsQueryParams struct {
	AccessPointID *string `queryParam:"style=form,explode=true,name=AccessPointId"`
	FileSystemID  *string `queryParam:"style=form,explode=true,name=FileSystemId"`
	Marker        *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems      *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
	MountTargetID *string `queryParam:"style=form,explode=true,name=MountTargetId"`
}

type DescribeMountTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeMountTargetsRequest struct {
	QueryParams DescribeMountTargetsQueryParams
	Headers     DescribeMountTargetsHeaders
}

type DescribeMountTargetsResponse struct {
	AccessPointNotFound          *interface{}
	BadRequest                   *interface{}
	ContentType                  string
	DescribeMountTargetsResponse *shared.DescribeMountTargetsResponse
	FileSystemNotFound           *interface{}
	InternalServerError          *interface{}
	MountTargetNotFound          *interface{}
	StatusCode                   int64
}
