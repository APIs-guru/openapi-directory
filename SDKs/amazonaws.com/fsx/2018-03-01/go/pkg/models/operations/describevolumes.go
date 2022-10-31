package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVolumesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeVolumesXAmzTargetEnum string

const (
	DescribeVolumesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeVolumes DescribeVolumesXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DescribeVolumes"
)

type DescribeVolumesHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeVolumesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeVolumesRequest struct {
	QueryParams DescribeVolumesQueryParams
	Headers     DescribeVolumesHeaders
	Request     shared.DescribeVolumesRequest `request:"mediaType=application/json"`
}

type DescribeVolumesResponse struct {
	BadRequest              *interface{}
	ContentType             string
	DescribeVolumesResponse *shared.DescribeVolumesResponse
	InternalServerError     *interface{}
	StatusCode              int64
	VolumeNotFound          *interface{}
}
