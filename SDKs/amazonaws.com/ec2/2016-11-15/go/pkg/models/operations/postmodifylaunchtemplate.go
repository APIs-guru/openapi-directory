package operations

type PostModifyLaunchTemplateActionEnum string

const (
	PostModifyLaunchTemplateActionEnumModifyLaunchTemplate PostModifyLaunchTemplateActionEnum = "ModifyLaunchTemplate"
)

type PostModifyLaunchTemplateVersionEnum string

const (
	PostModifyLaunchTemplateVersionEnumTwoThousandAndSixteen1115 PostModifyLaunchTemplateVersionEnum = "2016-11-15"
)

type PostModifyLaunchTemplateQueryParams struct {
	Action  PostModifyLaunchTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyLaunchTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyLaunchTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyLaunchTemplateRequest struct {
	QueryParams PostModifyLaunchTemplateQueryParams
	Headers     PostModifyLaunchTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyLaunchTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
