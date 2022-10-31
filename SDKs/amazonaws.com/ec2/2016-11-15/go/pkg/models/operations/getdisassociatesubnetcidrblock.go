package operations

type GetDisassociateSubnetCidrBlockActionEnum string

const (
	GetDisassociateSubnetCidrBlockActionEnumDisassociateSubnetCidrBlock GetDisassociateSubnetCidrBlockActionEnum = "DisassociateSubnetCidrBlock"
)

type GetDisassociateSubnetCidrBlockVersionEnum string

const (
	GetDisassociateSubnetCidrBlockVersionEnumTwoThousandAndSixteen1115 GetDisassociateSubnetCidrBlockVersionEnum = "2016-11-15"
)

type GetDisassociateSubnetCidrBlockQueryParams struct {
	Action        GetDisassociateSubnetCidrBlockActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AssociationID string                                    `queryParam:"style=form,explode=true,name=AssociationId"`
	Version       GetDisassociateSubnetCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateSubnetCidrBlockHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisassociateSubnetCidrBlockRequest struct {
	QueryParams GetDisassociateSubnetCidrBlockQueryParams
	Headers     GetDisassociateSubnetCidrBlockHeaders
}

type GetDisassociateSubnetCidrBlockResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
