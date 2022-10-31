package operations

type PostCreateLaunchTemplateVersionActionEnum string

const (
	PostCreateLaunchTemplateVersionActionEnumCreateLaunchTemplateVersion PostCreateLaunchTemplateVersionActionEnum = "CreateLaunchTemplateVersion"
)

type PostCreateLaunchTemplateVersionVersionEnum string

const (
	PostCreateLaunchTemplateVersionVersionEnumTwoThousandAndSixteen1115 PostCreateLaunchTemplateVersionVersionEnum = "2016-11-15"
)

type PostCreateLaunchTemplateVersionQueryParams struct {
	Action  PostCreateLaunchTemplateVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLaunchTemplateVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLaunchTemplateVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateLaunchTemplateVersionRequest struct {
	QueryParams PostCreateLaunchTemplateVersionQueryParams
	Headers     PostCreateLaunchTemplateVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLaunchTemplateVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
