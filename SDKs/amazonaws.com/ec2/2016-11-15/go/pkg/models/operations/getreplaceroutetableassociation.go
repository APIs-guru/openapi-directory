package operations

type GetReplaceRouteTableAssociationActionEnum string

const (
	GetReplaceRouteTableAssociationActionEnumReplaceRouteTableAssociation GetReplaceRouteTableAssociationActionEnum = "ReplaceRouteTableAssociation"
)

type GetReplaceRouteTableAssociationVersionEnum string

const (
	GetReplaceRouteTableAssociationVersionEnumTwoThousandAndSixteen1115 GetReplaceRouteTableAssociationVersionEnum = "2016-11-15"
)

type GetReplaceRouteTableAssociationQueryParams struct {
	Action        GetReplaceRouteTableAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AssociationID string                                     `queryParam:"style=form,explode=true,name=AssociationId"`
	DryRun        *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	RouteTableID  string                                     `queryParam:"style=form,explode=true,name=RouteTableId"`
	Version       GetReplaceRouteTableAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetReplaceRouteTableAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReplaceRouteTableAssociationRequest struct {
	QueryParams GetReplaceRouteTableAssociationQueryParams
	Headers     GetReplaceRouteTableAssociationHeaders
}

type GetReplaceRouteTableAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
