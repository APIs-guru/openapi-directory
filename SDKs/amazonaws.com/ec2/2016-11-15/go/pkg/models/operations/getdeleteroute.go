package operations

type GetDeleteRouteActionEnum string

const (
	GetDeleteRouteActionEnumDeleteRoute GetDeleteRouteActionEnum = "DeleteRoute"
)

type GetDeleteRouteVersionEnum string

const (
	GetDeleteRouteVersionEnumTwoThousandAndSixteen1115 GetDeleteRouteVersionEnum = "2016-11-15"
)

type GetDeleteRouteQueryParams struct {
	Action                   GetDeleteRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DestinationCidrBlock     *string                   `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DestinationIpv6CidrBlock *string                   `queryParam:"style=form,explode=true,name=DestinationIpv6CidrBlock"`
	DestinationPrefixListID  *string                   `queryParam:"style=form,explode=true,name=DestinationPrefixListId"`
	DryRun                   *bool                     `queryParam:"style=form,explode=true,name=DryRun"`
	RouteTableID             string                    `queryParam:"style=form,explode=true,name=RouteTableId"`
	Version                  GetDeleteRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteRouteRequest struct {
	QueryParams GetDeleteRouteQueryParams
	Headers     GetDeleteRouteHeaders
}

type GetDeleteRouteResponse struct {
	ContentType string
	StatusCode  int64
}
