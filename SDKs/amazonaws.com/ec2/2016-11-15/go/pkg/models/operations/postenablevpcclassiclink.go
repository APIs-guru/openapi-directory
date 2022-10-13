package operations

type PostEnableVpcClassicLinkActionEnum string

const (
	PostEnableVpcClassicLinkActionEnumEnableVpcClassicLink PostEnableVpcClassicLinkActionEnum = "EnableVpcClassicLink"
)

type PostEnableVpcClassicLinkVersionEnum string

const (
	PostEnableVpcClassicLinkVersionEnumTwoThousandAndSixteen1115 PostEnableVpcClassicLinkVersionEnum = "2016-11-15"
)

type PostEnableVpcClassicLinkQueryParams struct {
	Action  PostEnableVpcClassicLinkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableVpcClassicLinkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableVpcClassicLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostEnableVpcClassicLinkRequest struct {
	QueryParams PostEnableVpcClassicLinkQueryParams
	Headers     PostEnableVpcClassicLinkHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableVpcClassicLinkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
