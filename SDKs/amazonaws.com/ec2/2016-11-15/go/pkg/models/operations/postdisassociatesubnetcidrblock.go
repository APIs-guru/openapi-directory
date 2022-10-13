package operations

type PostDisassociateSubnetCidrBlockActionEnum string

const (
	PostDisassociateSubnetCidrBlockActionEnumDisassociateSubnetCidrBlock PostDisassociateSubnetCidrBlockActionEnum = "DisassociateSubnetCidrBlock"
)

type PostDisassociateSubnetCidrBlockVersionEnum string

const (
	PostDisassociateSubnetCidrBlockVersionEnumTwoThousandAndSixteen1115 PostDisassociateSubnetCidrBlockVersionEnum = "2016-11-15"
)

type PostDisassociateSubnetCidrBlockQueryParams struct {
	Action  PostDisassociateSubnetCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateSubnetCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateSubnetCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateSubnetCidrBlockRequest struct {
	QueryParams PostDisassociateSubnetCidrBlockQueryParams
	Headers     PostDisassociateSubnetCidrBlockHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateSubnetCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
