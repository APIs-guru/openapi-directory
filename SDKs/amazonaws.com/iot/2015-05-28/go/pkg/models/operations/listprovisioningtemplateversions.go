package operations

import (
	"openapi/pkg/models/shared"
)

type ListProvisioningTemplateVersionsPathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
}

type ListProvisioningTemplateVersionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListProvisioningTemplateVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListProvisioningTemplateVersionsRequest struct {
	PathParams  ListProvisioningTemplateVersionsPathParams
	QueryParams ListProvisioningTemplateVersionsQueryParams
	Headers     ListProvisioningTemplateVersionsHeaders
}

type ListProvisioningTemplateVersionsResponse struct {
	ContentType                              string
	InternalFailureException                 *interface{}
	InvalidRequestException                  *interface{}
	ListProvisioningTemplateVersionsResponse *shared.ListProvisioningTemplateVersionsResponse
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
	UnauthorizedException                    *interface{}
}
