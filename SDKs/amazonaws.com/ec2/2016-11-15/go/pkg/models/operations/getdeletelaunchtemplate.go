package operations

type GetDeleteLaunchTemplateActionEnum string

const (
	GetDeleteLaunchTemplateActionEnumDeleteLaunchTemplate GetDeleteLaunchTemplateActionEnum = "DeleteLaunchTemplate"
)

type GetDeleteLaunchTemplateVersionEnum string

const (
	GetDeleteLaunchTemplateVersionEnumTwoThousandAndSixteen1115 GetDeleteLaunchTemplateVersionEnum = "2016-11-15"
)

type GetDeleteLaunchTemplateQueryParams struct {
	Action             GetDeleteLaunchTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	LaunchTemplateID   *string                            `queryParam:"style=form,explode=true,name=LaunchTemplateId"`
	LaunchTemplateName *string                            `queryParam:"style=form,explode=true,name=LaunchTemplateName"`
	Version            GetDeleteLaunchTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLaunchTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteLaunchTemplateRequest struct {
	QueryParams GetDeleteLaunchTemplateQueryParams
	Headers     GetDeleteLaunchTemplateHeaders
}

type GetDeleteLaunchTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
