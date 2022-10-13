package operations

type GetAcceptVpcPeeringConnectionActionEnum string

const (
	GetAcceptVpcPeeringConnectionActionEnumAcceptVpcPeeringConnection GetAcceptVpcPeeringConnectionActionEnum = "AcceptVpcPeeringConnection"
)

type GetAcceptVpcPeeringConnectionVersionEnum string

const (
	GetAcceptVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 GetAcceptVpcPeeringConnectionVersionEnum = "2016-11-15"
)

type GetAcceptVpcPeeringConnectionQueryParams struct {
	Action                 GetAcceptVpcPeeringConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                 *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	Version                GetAcceptVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcPeeringConnectionID *string                                  `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
}

type GetAcceptVpcPeeringConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAcceptVpcPeeringConnectionRequest struct {
	QueryParams GetAcceptVpcPeeringConnectionQueryParams
	Headers     GetAcceptVpcPeeringConnectionHeaders
}

type GetAcceptVpcPeeringConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
