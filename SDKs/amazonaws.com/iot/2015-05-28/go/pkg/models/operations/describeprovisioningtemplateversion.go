package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProvisioningTemplateVersionPathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
	VersionID    int64  `pathParam:"style=simple,explode=false,name=versionId"`
}

type DescribeProvisioningTemplateVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeProvisioningTemplateVersionRequest struct {
	PathParams DescribeProvisioningTemplateVersionPathParams
	Headers    DescribeProvisioningTemplateVersionHeaders
}

type DescribeProvisioningTemplateVersionResponse struct {
	ContentType                                 string
	DescribeProvisioningTemplateVersionResponse *shared.DescribeProvisioningTemplateVersionResponse
	InternalFailureException                    *interface{}
	InvalidRequestException                     *interface{}
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	ThrottlingException                         *interface{}
	UnauthorizedException                       *interface{}
}
