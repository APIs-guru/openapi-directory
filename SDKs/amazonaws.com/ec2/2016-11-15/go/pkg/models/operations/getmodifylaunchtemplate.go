package operations

type GetModifyLaunchTemplateActionEnum string

const (
	GetModifyLaunchTemplateActionEnumModifyLaunchTemplate GetModifyLaunchTemplateActionEnum = "ModifyLaunchTemplate"
)

type GetModifyLaunchTemplateVersionEnum string

const (
	GetModifyLaunchTemplateVersionEnumTwoThousandAndSixteen1115 GetModifyLaunchTemplateVersionEnum = "2016-11-15"
)

type GetModifyLaunchTemplateQueryParams struct {
	Action             GetModifyLaunchTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientToken        *string                            `queryParam:"style=form,explode=true,name=ClientToken"`
	DryRun             *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	LaunchTemplateID   *string                            `queryParam:"style=form,explode=true,name=LaunchTemplateId"`
	LaunchTemplateName *string                            `queryParam:"style=form,explode=true,name=LaunchTemplateName"`
	SetDefaultVersion  *string                            `queryParam:"style=form,explode=true,name=SetDefaultVersion"`
	Version            GetModifyLaunchTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyLaunchTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyLaunchTemplateRequest struct {
	QueryParams GetModifyLaunchTemplateQueryParams
	Headers     GetModifyLaunchTemplateHeaders
}

type GetModifyLaunchTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
