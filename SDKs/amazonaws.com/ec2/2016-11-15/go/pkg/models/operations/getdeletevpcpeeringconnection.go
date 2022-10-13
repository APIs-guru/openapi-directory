package operations

type GetDeleteVpcPeeringConnectionActionEnum string

const (
	GetDeleteVpcPeeringConnectionActionEnumDeleteVpcPeeringConnection GetDeleteVpcPeeringConnectionActionEnum = "DeleteVpcPeeringConnection"
)

type GetDeleteVpcPeeringConnectionVersionEnum string

const (
	GetDeleteVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 GetDeleteVpcPeeringConnectionVersionEnum = "2016-11-15"
)

type GetDeleteVpcPeeringConnectionQueryParams struct {
	Action                 GetDeleteVpcPeeringConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                 *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	Version                GetDeleteVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcPeeringConnectionID string                                   `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
}

type GetDeleteVpcPeeringConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpcPeeringConnectionRequest struct {
	QueryParams GetDeleteVpcPeeringConnectionQueryParams
	Headers     GetDeleteVpcPeeringConnectionHeaders
}

type GetDeleteVpcPeeringConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
