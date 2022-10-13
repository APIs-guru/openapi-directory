package operations

type GetAssociateDhcpOptionsActionEnum string

const (
	GetAssociateDhcpOptionsActionEnumAssociateDhcpOptions GetAssociateDhcpOptionsActionEnum = "AssociateDhcpOptions"
)

type GetAssociateDhcpOptionsVersionEnum string

const (
	GetAssociateDhcpOptionsVersionEnumTwoThousandAndSixteen1115 GetAssociateDhcpOptionsVersionEnum = "2016-11-15"
)

type GetAssociateDhcpOptionsQueryParams struct {
	Action        GetAssociateDhcpOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DhcpOptionsID string                             `queryParam:"style=form,explode=true,name=DhcpOptionsId"`
	DryRun        *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	Version       GetAssociateDhcpOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID         string                             `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetAssociateDhcpOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssociateDhcpOptionsRequest struct {
	QueryParams GetAssociateDhcpOptionsQueryParams
	Headers     GetAssociateDhcpOptionsHeaders
}

type GetAssociateDhcpOptionsResponse struct {
	ContentType string
	StatusCode  int64
}
