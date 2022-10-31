package operations

type GetModifyVpcEndpointActionEnum string

const (
	GetModifyVpcEndpointActionEnumModifyVpcEndpoint GetModifyVpcEndpointActionEnum = "ModifyVpcEndpoint"
)

type GetModifyVpcEndpointVersionEnum string

const (
	GetModifyVpcEndpointVersionEnumTwoThousandAndSixteen1115 GetModifyVpcEndpointVersionEnum = "2016-11-15"
)

type GetModifyVpcEndpointQueryParams struct {
	Action                GetModifyVpcEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AddRouteTableID       []string                        `queryParam:"style=form,explode=true,name=AddRouteTableId"`
	AddSecurityGroupID    []string                        `queryParam:"style=form,explode=true,name=AddSecurityGroupId"`
	AddSubnetID           []string                        `queryParam:"style=form,explode=true,name=AddSubnetId"`
	DryRun                *bool                           `queryParam:"style=form,explode=true,name=DryRun"`
	PolicyDocument        *string                         `queryParam:"style=form,explode=true,name=PolicyDocument"`
	PrivateDNSEnabled     *bool                           `queryParam:"style=form,explode=true,name=PrivateDnsEnabled"`
	RemoveRouteTableID    []string                        `queryParam:"style=form,explode=true,name=RemoveRouteTableId"`
	RemoveSecurityGroupID []string                        `queryParam:"style=form,explode=true,name=RemoveSecurityGroupId"`
	RemoveSubnetID        []string                        `queryParam:"style=form,explode=true,name=RemoveSubnetId"`
	ResetPolicy           *bool                           `queryParam:"style=form,explode=true,name=ResetPolicy"`
	Version               GetModifyVpcEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcEndpointID         string                          `queryParam:"style=form,explode=true,name=VpcEndpointId"`
}

type GetModifyVpcEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyVpcEndpointRequest struct {
	QueryParams GetModifyVpcEndpointQueryParams
	Headers     GetModifyVpcEndpointHeaders
}

type GetModifyVpcEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
