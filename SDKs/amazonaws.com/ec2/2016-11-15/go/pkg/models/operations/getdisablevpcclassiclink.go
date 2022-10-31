package operations

type GetDisableVpcClassicLinkActionEnum string

const (
	GetDisableVpcClassicLinkActionEnumDisableVpcClassicLink GetDisableVpcClassicLinkActionEnum = "DisableVpcClassicLink"
)

type GetDisableVpcClassicLinkVersionEnum string

const (
	GetDisableVpcClassicLinkVersionEnumTwoThousandAndSixteen1115 GetDisableVpcClassicLinkVersionEnum = "2016-11-15"
)

type GetDisableVpcClassicLinkQueryParams struct {
	Action  GetDisableVpcClassicLinkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                               `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetDisableVpcClassicLinkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID   string                              `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDisableVpcClassicLinkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisableVpcClassicLinkRequest struct {
	QueryParams GetDisableVpcClassicLinkQueryParams
	Headers     GetDisableVpcClassicLinkHeaders
}

type GetDisableVpcClassicLinkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
