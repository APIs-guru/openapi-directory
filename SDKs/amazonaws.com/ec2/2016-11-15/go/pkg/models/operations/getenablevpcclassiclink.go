package operations

type GetEnableVpcClassicLinkActionEnum string

const (
	GetEnableVpcClassicLinkActionEnumEnableVpcClassicLink GetEnableVpcClassicLinkActionEnum = "EnableVpcClassicLink"
)

type GetEnableVpcClassicLinkVersionEnum string

const (
	GetEnableVpcClassicLinkVersionEnumTwoThousandAndSixteen1115 GetEnableVpcClassicLinkVersionEnum = "2016-11-15"
)

type GetEnableVpcClassicLinkQueryParams struct {
	Action  GetEnableVpcClassicLinkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetEnableVpcClassicLinkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID   string                             `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetEnableVpcClassicLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableVpcClassicLinkRequest struct {
	QueryParams GetEnableVpcClassicLinkQueryParams
	Headers     GetEnableVpcClassicLinkHeaders
}

type GetEnableVpcClassicLinkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
