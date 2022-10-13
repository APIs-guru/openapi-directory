package operations

type PostCreateLaunchTemplateActionEnum string

const (
	PostCreateLaunchTemplateActionEnumCreateLaunchTemplate PostCreateLaunchTemplateActionEnum = "CreateLaunchTemplate"
)

type PostCreateLaunchTemplateVersionEnum string

const (
	PostCreateLaunchTemplateVersionEnumTwoThousandAndSixteen1115 PostCreateLaunchTemplateVersionEnum = "2016-11-15"
)

type PostCreateLaunchTemplateQueryParams struct {
	Action  PostCreateLaunchTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLaunchTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLaunchTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateLaunchTemplateRequest struct {
	QueryParams PostCreateLaunchTemplateQueryParams
	Headers     PostCreateLaunchTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLaunchTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
