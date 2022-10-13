package operations

type GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions struct {
	AllowDNSResolutionFromRemoteVpc            *bool `queryParam:"name=AllowDnsResolutionFromRemoteVpc"`
	AllowEgressFromLocalClassicLinkToRemoteVpc *bool `queryParam:"name=AllowEgressFromLocalClassicLinkToRemoteVpc"`
	AllowEgressFromLocalVpcToRemoteClassicLink *bool `queryParam:"name=AllowEgressFromLocalVpcToRemoteClassicLink"`
}

type GetModifyVpcPeeringConnectionOptionsActionEnum string

const (
	GetModifyVpcPeeringConnectionOptionsActionEnumModifyVpcPeeringConnectionOptions GetModifyVpcPeeringConnectionOptionsActionEnum = "ModifyVpcPeeringConnectionOptions"
)

type GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions struct {
	AllowDNSResolutionFromRemoteVpc            *bool `queryParam:"name=AllowDnsResolutionFromRemoteVpc"`
	AllowEgressFromLocalClassicLinkToRemoteVpc *bool `queryParam:"name=AllowEgressFromLocalClassicLinkToRemoteVpc"`
	AllowEgressFromLocalVpcToRemoteClassicLink *bool `queryParam:"name=AllowEgressFromLocalVpcToRemoteClassicLink"`
}

type GetModifyVpcPeeringConnectionOptionsVersionEnum string

const (
	GetModifyVpcPeeringConnectionOptionsVersionEnumTwoThousandAndSixteen1115 GetModifyVpcPeeringConnectionOptionsVersionEnum = "2016-11-15"
)

type GetModifyVpcPeeringConnectionOptionsQueryParams struct {
	AccepterPeeringConnectionOptions  *GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions  `queryParam:"style=form,explode=true,name=AccepterPeeringConnectionOptions"`
	Action                            GetModifyVpcPeeringConnectionOptionsActionEnum                         `queryParam:"style=form,explode=true,name=Action"`
	DryRun                            *bool                                                                  `queryParam:"style=form,explode=true,name=DryRun"`
	RequesterPeeringConnectionOptions *GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions `queryParam:"style=form,explode=true,name=RequesterPeeringConnectionOptions"`
	Version                           GetModifyVpcPeeringConnectionOptionsVersionEnum                        `queryParam:"style=form,explode=true,name=Version"`
	VpcPeeringConnectionID            string                                                                 `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
}

type GetModifyVpcPeeringConnectionOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyVpcPeeringConnectionOptionsRequest struct {
	QueryParams GetModifyVpcPeeringConnectionOptionsQueryParams
	Headers     GetModifyVpcPeeringConnectionOptionsHeaders
}

type GetModifyVpcPeeringConnectionOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
