package operations

type GetDisableVgwRoutePropagationActionEnum string

const (
	GetDisableVgwRoutePropagationActionEnumDisableVgwRoutePropagation GetDisableVgwRoutePropagationActionEnum = "DisableVgwRoutePropagation"
)

type GetDisableVgwRoutePropagationVersionEnum string

const (
	GetDisableVgwRoutePropagationVersionEnumTwoThousandAndSixteen1115 GetDisableVgwRoutePropagationVersionEnum = "2016-11-15"
)

type GetDisableVgwRoutePropagationQueryParams struct {
	Action       GetDisableVgwRoutePropagationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	GatewayID    string                                   `queryParam:"style=form,explode=true,name=GatewayId"`
	RouteTableID string                                   `queryParam:"style=form,explode=true,name=RouteTableId"`
	Version      GetDisableVgwRoutePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableVgwRoutePropagationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableVgwRoutePropagationRequest struct {
	QueryParams GetDisableVgwRoutePropagationQueryParams
	Headers     GetDisableVgwRoutePropagationHeaders
}

type GetDisableVgwRoutePropagationResponse struct {
	ContentType string
	StatusCode  int64
}
