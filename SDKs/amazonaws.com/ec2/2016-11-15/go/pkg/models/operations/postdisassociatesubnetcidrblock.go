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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
