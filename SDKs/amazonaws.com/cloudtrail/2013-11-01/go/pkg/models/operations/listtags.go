package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTagsXAmzTargetEnum string

const (
	ListTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags ListTagsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags"
)

type ListTagsHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTagsRequest struct {
	QueryParams ListTagsQueryParams
	Headers     ListTagsHeaders
	Request     shared.ListTagsRequest `request:"mediaType=application/json"`
}

type ListTagsResponse struct {
	CloudTrailArnInvalidException     *interface{}
	ContentType                       string
	InvalidTokenException             *interface{}
	InvalidTrailNameException         *interface{}
	ListTagsResponse                  *shared.ListTagsResponse
	OperationNotPermittedException    *interface{}
	ResourceNotFoundException         *interface{}
	ResourceTypeNotSupportedException *interface{}
	StatusCode                        int64
	UnsupportedOperationException     *interface{}
}
