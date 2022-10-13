package operations

type GetDescribeSuggestersActionEnum string

const (
	GetDescribeSuggestersActionEnumDescribeSuggesters GetDescribeSuggestersActionEnum = "DescribeSuggesters"
)

type GetDescribeSuggestersVersionEnum string

const (
	GetDescribeSuggestersVersionEnumTwoThousandAndThirteen0101 GetDescribeSuggestersVersionEnum = "2013-01-01"
)

type GetDescribeSuggestersQueryParams struct {
	Action         GetDescribeSuggestersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Deployed       *bool                            `queryParam:"style=form,explode=true,name=Deployed"`
	DomainName     string                           `queryParam:"style=form,explode=true,name=DomainName"`
	SuggesterNames []string                         `queryParam:"style=form,explode=true,name=SuggesterNames"`
	Version        GetDescribeSuggestersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSuggestersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeSuggestersRequest struct {
	QueryParams GetDescribeSuggestersQueryParams
	Headers     GetDescribeSuggestersHeaders
}

type GetDescribeSuggestersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
