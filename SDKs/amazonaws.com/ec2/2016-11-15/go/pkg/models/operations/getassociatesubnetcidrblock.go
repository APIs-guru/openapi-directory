package operations

type GetAssociateSubnetCidrBlockActionEnum string

const (
	GetAssociateSubnetCidrBlockActionEnumAssociateSubnetCidrBlock GetAssociateSubnetCidrBlockActionEnum = "AssociateSubnetCidrBlock"
)

type GetAssociateSubnetCidrBlockVersionEnum string

const (
	GetAssociateSubnetCidrBlockVersionEnumTwoThousandAndSixteen1115 GetAssociateSubnetCidrBlockVersionEnum = "2016-11-15"
)

type GetAssociateSubnetCidrBlockQueryParams struct {
	Action        GetAssociateSubnetCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Ipv6CidrBlock string                                 `queryParam:"style=form,explode=true,name=Ipv6CidrBlock"`
	SubnetID      string                                 `queryParam:"style=form,explode=true,name=SubnetId"`
	Version       GetAssociateSubnetCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateSubnetCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssociateSubnetCidrBlockRequest struct {
	QueryParams GetAssociateSubnetCidrBlockQueryParams
	Headers     GetAssociateSubnetCidrBlockHeaders
}

type GetAssociateSubnetCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
