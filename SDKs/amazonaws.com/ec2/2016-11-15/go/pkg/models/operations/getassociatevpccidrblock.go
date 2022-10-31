package operations

type GetAssociateVpcCidrBlockActionEnum string

const (
	GetAssociateVpcCidrBlockActionEnumAssociateVpcCidrBlock GetAssociateVpcCidrBlockActionEnum = "AssociateVpcCidrBlock"
)

type GetAssociateVpcCidrBlockVersionEnum string

const (
	GetAssociateVpcCidrBlockVersionEnumTwoThousandAndSixteen1115 GetAssociateVpcCidrBlockVersionEnum = "2016-11-15"
)

type GetAssociateVpcCidrBlockQueryParams struct {
	Action                          GetAssociateVpcCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AmazonProvidedIpv6CidrBlock     *bool                               `queryParam:"style=form,explode=true,name=AmazonProvidedIpv6CidrBlock"`
	CidrBlock                       *string                             `queryParam:"style=form,explode=true,name=CidrBlock"`
	Ipv6CidrBlock                   *string                             `queryParam:"style=form,explode=true,name=Ipv6CidrBlock"`
	Ipv6CidrBlockNetworkBorderGroup *string                             `queryParam:"style=form,explode=true,name=Ipv6CidrBlockNetworkBorderGroup"`
	Ipv6Pool                        *string                             `queryParam:"style=form,explode=true,name=Ipv6Pool"`
	Version                         GetAssociateVpcCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID                           string                              `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetAssociateVpcCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssociateVpcCidrBlockRequest struct {
	QueryParams GetAssociateVpcCidrBlockQueryParams
	Headers     GetAssociateVpcCidrBlockHeaders
}

type GetAssociateVpcCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
