package operations

type PostRegisterTransitGatewayMulticastGroupMembersActionEnum string

const (
	PostRegisterTransitGatewayMulticastGroupMembersActionEnumRegisterTransitGatewayMulticastGroupMembers PostRegisterTransitGatewayMulticastGroupMembersActionEnum = "RegisterTransitGatewayMulticastGroupMembers"
)

type PostRegisterTransitGatewayMulticastGroupMembersVersionEnum string

const (
	PostRegisterTransitGatewayMulticastGroupMembersVersionEnumTwoThousandAndSixteen1115 PostRegisterTransitGatewayMulticastGroupMembersVersionEnum = "2016-11-15"
)

type PostRegisterTransitGatewayMulticastGroupMembersQueryParams struct {
	Action  PostRegisterTransitGatewayMulticastGroupMembersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRegisterTransitGatewayMulticastGroupMembersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRegisterTransitGatewayMulticastGroupMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRegisterTransitGatewayMulticastGroupMembersRequest struct {
	QueryParams PostRegisterTransitGatewayMulticastGroupMembersQueryParams
	Headers     PostRegisterTransitGatewayMulticastGroupMembersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRegisterTransitGatewayMulticastGroupMembersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
