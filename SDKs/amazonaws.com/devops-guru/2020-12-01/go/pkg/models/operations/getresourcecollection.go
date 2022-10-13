package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceCollectionResourceCollectionTypeEnum string

const (
	GetResourceCollectionResourceCollectionTypeEnumAwsCloudFormation GetResourceCollectionResourceCollectionTypeEnum = "AWS_CLOUD_FORMATION"
	GetResourceCollectionResourceCollectionTypeEnumAwsService        GetResourceCollectionResourceCollectionTypeEnum = "AWS_SERVICE"
)

type GetResourceCollectionPathParams struct {
	ResourceCollectionType GetResourceCollectionResourceCollectionTypeEnum `pathParam:"style=simple,explode=false,name=ResourceCollectionType"`
}

type GetResourceCollectionQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetResourceCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResourceCollectionRequest struct {
	PathParams  GetResourceCollectionPathParams
	QueryParams GetResourceCollectionQueryParams
	Headers     GetResourceCollectionHeaders
}

type GetResourceCollectionResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	GetResourceCollectionResponse *shared.GetResourceCollectionResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
