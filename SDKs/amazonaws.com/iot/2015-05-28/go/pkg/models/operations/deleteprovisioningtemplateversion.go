package operations

type DeleteProvisioningTemplateVersionPathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
	VersionID    int64  `pathParam:"style=simple,explode=false,name=versionId"`
}

type DeleteProvisioningTemplateVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProvisioningTemplateVersionRequest struct {
	PathParams DeleteProvisioningTemplateVersionPathParams
	Headers    DeleteProvisioningTemplateVersionHeaders
}

type DeleteProvisioningTemplateVersionResponse struct {
	ConflictingResourceUpdateException        *interface{}
	ContentType                               string
	DeleteConflictException                   *interface{}
	DeleteProvisioningTemplateVersionResponse map[string]interface{}
	InternalFailureException                  *interface{}
	InvalidRequestException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ThrottlingException                       *interface{}
	UnauthorizedException                     *interface{}
}
