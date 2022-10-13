package operations

type PostDisassociateVpcCidrBlockActionEnum string

const (
	PostDisassociateVpcCidrBlockActionEnumDisassociateVpcCidrBlock PostDisassociateVpcCidrBlockActionEnum = "DisassociateVpcCidrBlock"
)

type PostDisassociateVpcCidrBlockVersionEnum string

const (
	PostDisassociateVpcCidrBlockVersionEnumTwoThousandAndSixteen1115 PostDisassociateVpcCidrBlockVersionEnum = "2016-11-15"
)

type PostDisassociateVpcCidrBlockQueryParams struct {
	Action  PostDisassociateVpcCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateVpcCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateVpcCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateVpcCidrBlockRequest struct {
	QueryParams PostDisassociateVpcCidrBlockQueryParams
	Headers     PostDisassociateVpcCidrBlockHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateVpcCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
