package operations

import (
	"openapi/pkg/models/shared"
)

type ListObjectParentPathsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListObjectParentPathsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type ListObjectParentPathsRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListObjectParentPathsRequestBody struct {
	MaxResults      *int64                                          `json:"MaxResults,omitempty"`
	NextToken       *string                                         `json:"NextToken,omitempty"`
	ObjectReference ListObjectParentPathsRequestBodyObjectReference `json:"ObjectReference"`
}

type ListObjectParentPathsRequest struct {
	QueryParams ListObjectParentPathsQueryParams
	Headers     ListObjectParentPathsHeaders
	Request     ListObjectParentPathsRequestBody `request:"mediaType=application/json"`
}

type ListObjectParentPathsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DirectoryNotEnabledException  *interface{}
	InternalServiceException      *interface{}
	InvalidArnException           *interface{}
	InvalidNextTokenException     *interface{}
	LimitExceededException        *interface{}
	ListObjectParentPathsResponse *shared.ListObjectParentPathsResponse
	ResourceNotFoundException     *interface{}
	RetryableConflictException    *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
