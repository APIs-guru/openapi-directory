package operations

type GetDescribePrincipalIDFormatActionEnum string

const (
	GetDescribePrincipalIDFormatActionEnumDescribePrincipalIDFormat GetDescribePrincipalIDFormatActionEnum = "DescribePrincipalIdFormat"
)

type GetDescribePrincipalIDFormatVersionEnum string

const (
	GetDescribePrincipalIDFormatVersionEnumTwoThousandAndSixteen1115 GetDescribePrincipalIDFormatVersionEnum = "2016-11-15"
)

type GetDescribePrincipalIDFormatQueryParams struct {
	Action     GetDescribePrincipalIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	MaxResults *int64                                  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Resource   []string                                `queryParam:"style=form,explode=true,name=Resource"`
	Version    GetDescribePrincipalIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribePrincipalIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribePrincipalIDFormatRequest struct {
	QueryParams GetDescribePrincipalIDFormatQueryParams
	Headers     GetDescribePrincipalIDFormatHeaders
}

type GetDescribePrincipalIDFormatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
