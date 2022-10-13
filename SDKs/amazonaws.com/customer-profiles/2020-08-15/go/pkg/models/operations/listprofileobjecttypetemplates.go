package operations

import (
	"openapi/pkg/models/shared"
)

type ListProfileObjectTypeTemplatesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=max-results"`
	NextToken  *string `queryParam:"style=form,explode=true,name=next-token"`
}

type ListProfileObjectTypeTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProfileObjectTypeTemplatesRequest struct {
	QueryParams ListProfileObjectTypeTemplatesQueryParams
	Headers     ListProfileObjectTypeTemplatesHeaders
}

type ListProfileObjectTypeTemplatesResponse struct {
	AccessDeniedException                  *interface{}
	BadRequestException                    *interface{}
	ContentType                            string
	InternalServerException                *interface{}
	ListProfileObjectTypeTemplatesResponse *shared.ListProfileObjectTypeTemplatesResponse
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
