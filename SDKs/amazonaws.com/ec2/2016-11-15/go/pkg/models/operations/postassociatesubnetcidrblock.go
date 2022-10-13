package operations

type PostAssociateSubnetCidrBlockActionEnum string

const (
	PostAssociateSubnetCidrBlockActionEnumAssociateSubnetCidrBlock PostAssociateSubnetCidrBlockActionEnum = "AssociateSubnetCidrBlock"
)

type PostAssociateSubnetCidrBlockVersionEnum string

const (
	PostAssociateSubnetCidrBlockVersionEnumTwoThousandAndSixteen1115 PostAssociateSubnetCidrBlockVersionEnum = "2016-11-15"
)

type PostAssociateSubnetCidrBlockQueryParams struct {
	Action  PostAssociateSubnetCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateSubnetCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateSubnetCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateSubnetCidrBlockRequest struct {
	QueryParams PostAssociateSubnetCidrBlockQueryParams
	Headers     PostAssociateSubnetCidrBlockHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateSubnetCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
