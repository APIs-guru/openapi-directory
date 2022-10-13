package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisioningTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
}

type DescribeProvisioningTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeProvisioningTemplateRequest struct {
	PathParams DescribeProvisioningTemplatePathParams
	Headers    DescribeProvisioningTemplateHeaders
}

type DescribeProvisioningTemplateResponse struct {
	ContentType                          string
	DescribeProvisioningTemplateResponse *shared.DescribeProvisioningTemplateResponse
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UnauthorizedException                *interface{}
}
