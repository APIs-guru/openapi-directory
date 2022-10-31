package operations

type GetDeleteDhcpOptionsActionEnum string

const (
	GetDeleteDhcpOptionsActionEnumDeleteDhcpOptions GetDeleteDhcpOptionsActionEnum = "DeleteDhcpOptions"
)

type GetDeleteDhcpOptionsVersionEnum string

const (
	GetDeleteDhcpOptionsVersionEnumTwoThousandAndSixteen1115 GetDeleteDhcpOptionsVersionEnum = "2016-11-15"
)

type GetDeleteDhcpOptionsQueryParams struct {
	Action        GetDeleteDhcpOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DhcpOptionsID string                          `queryParam:"style=form,explode=true,name=DhcpOptionsId"`
	DryRun        *bool                           `queryParam:"style=form,explode=true,name=DryRun"`
	Version       GetDeleteDhcpOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDhcpOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteDhcpOptionsRequest struct {
	QueryParams GetDeleteDhcpOptionsQueryParams
	Headers     GetDeleteDhcpOptionsHeaders
}

type GetDeleteDhcpOptionsResponse struct {
	ContentType string
	StatusCode  int64
}
