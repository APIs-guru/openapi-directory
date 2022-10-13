package operations

import (
	"openapi/pkg/models/shared"
)

type ListProvisioningTemplatesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListProvisioningTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProvisioningTemplatesRequest struct {
	QueryParams ListProvisioningTemplatesQueryParams
	Headers     ListProvisioningTemplatesHeaders
}

type ListProvisioningTemplatesResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ListProvisioningTemplatesResponse *shared.ListProvisioningTemplatesResponse
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedException             *interface{}
}
