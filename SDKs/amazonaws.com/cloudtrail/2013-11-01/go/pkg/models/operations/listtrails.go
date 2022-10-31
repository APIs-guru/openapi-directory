package operations

import (
	"openapi/pkg/models/shared"
)

type ListTrailsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTrailsXAmzTargetEnum string

const (
	ListTrailsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails ListTrailsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"
)

type ListTrailsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTrailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTrailsRequest struct {
	QueryParams ListTrailsQueryParams
	Headers     ListTrailsHeaders
	Request     shared.ListTrailsRequest `request:"mediaType=application/json"`
}

type ListTrailsResponse struct {
	ContentType                    string
	ListTrailsResponse             *shared.ListTrailsResponse
	OperationNotPermittedException *interface{}
	StatusCode                     int64
	UnsupportedOperationException  *interface{}
}
