package operations

type GetDisassociateRouteTableActionEnum string

const (
	GetDisassociateRouteTableActionEnumDisassociateRouteTable GetDisassociateRouteTableActionEnum = "DisassociateRouteTable"
)

type GetDisassociateRouteTableVersionEnum string

const (
	GetDisassociateRouteTableVersionEnumTwoThousandAndSixteen1115 GetDisassociateRouteTableVersionEnum = "2016-11-15"
)

type GetDisassociateRouteTableQueryParams struct {
	Action        GetDisassociateRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AssociationID string                               `queryParam:"style=form,explode=true,name=AssociationId"`
	DryRun        *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	Version       GetDisassociateRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisassociateRouteTableRequest struct {
	QueryParams GetDisassociateRouteTableQueryParams
	Headers     GetDisassociateRouteTableHeaders
}

type GetDisassociateRouteTableResponse struct {
	ContentType string
	StatusCode  int64
}
