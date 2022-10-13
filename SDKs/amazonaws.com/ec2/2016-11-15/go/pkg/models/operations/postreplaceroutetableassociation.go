package operations

type PostReplaceRouteTableAssociationActionEnum string

const (
	PostReplaceRouteTableAssociationActionEnumReplaceRouteTableAssociation PostReplaceRouteTableAssociationActionEnum = "ReplaceRouteTableAssociation"
)

type PostReplaceRouteTableAssociationVersionEnum string

const (
	PostReplaceRouteTableAssociationVersionEnumTwoThousandAndSixteen1115 PostReplaceRouteTableAssociationVersionEnum = "2016-11-15"
)

type PostReplaceRouteTableAssociationQueryParams struct {
	Action  PostReplaceRouteTableAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReplaceRouteTableAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReplaceRouteTableAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReplaceRouteTableAssociationRequest struct {
	QueryParams PostReplaceRouteTableAssociationQueryParams
	Headers     PostReplaceRouteTableAssociationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReplaceRouteTableAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
