package operations

import (
	"openapi/pkg/models/shared"
)

type ListDocumentClassifiersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDocumentClassifiersXAmzTargetEnum string

const (
	ListDocumentClassifiersXAmzTargetEnumComprehend20171127ListDocumentClassifiers ListDocumentClassifiersXAmzTargetEnum = "Comprehend_20171127.ListDocumentClassifiers"
)

type ListDocumentClassifiersHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDocumentClassifiersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDocumentClassifiersRequest struct {
	QueryParams ListDocumentClassifiersQueryParams
	Headers     ListDocumentClassifiersHeaders
	Request     shared.ListDocumentClassifiersRequest `request:"mediaType=application/json"`
}

type ListDocumentClassifiersResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidFilterException          *interface{}
	InvalidRequestException         *interface{}
	ListDocumentClassifiersResponse *shared.ListDocumentClassifiersResponse
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
