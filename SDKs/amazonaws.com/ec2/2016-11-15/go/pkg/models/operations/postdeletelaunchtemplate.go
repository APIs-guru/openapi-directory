package operations

type PostDeleteLaunchTemplateActionEnum string

const (
	PostDeleteLaunchTemplateActionEnumDeleteLaunchTemplate PostDeleteLaunchTemplateActionEnum = "DeleteLaunchTemplate"
)

type PostDeleteLaunchTemplateVersionEnum string

const (
	PostDeleteLaunchTemplateVersionEnumTwoThousandAndSixteen1115 PostDeleteLaunchTemplateVersionEnum = "2016-11-15"
)

type PostDeleteLaunchTemplateQueryParams struct {
	Action  PostDeleteLaunchTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLaunchTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLaunchTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteLaunchTemplateRequest struct {
	QueryParams PostDeleteLaunchTemplateQueryParams
	Headers     PostDeleteLaunchTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLaunchTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
