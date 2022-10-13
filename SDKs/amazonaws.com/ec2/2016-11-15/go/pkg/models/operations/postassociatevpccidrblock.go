package operations

type PostAssociateVpcCidrBlockActionEnum string

const (
	PostAssociateVpcCidrBlockActionEnumAssociateVpcCidrBlock PostAssociateVpcCidrBlockActionEnum = "AssociateVpcCidrBlock"
)

type PostAssociateVpcCidrBlockVersionEnum string

const (
	PostAssociateVpcCidrBlockVersionEnumTwoThousandAndSixteen1115 PostAssociateVpcCidrBlockVersionEnum = "2016-11-15"
)

type PostAssociateVpcCidrBlockQueryParams struct {
	Action  PostAssociateVpcCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateVpcCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateVpcCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateVpcCidrBlockRequest struct {
	QueryParams PostAssociateVpcCidrBlockQueryParams
	Headers     PostAssociateVpcCidrBlockHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateVpcCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
