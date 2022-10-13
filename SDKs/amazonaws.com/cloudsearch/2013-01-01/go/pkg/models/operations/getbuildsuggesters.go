package operations

type GetBuildSuggestersActionEnum string

const (
	GetBuildSuggestersActionEnumBuildSuggesters GetBuildSuggestersActionEnum = "BuildSuggesters"
)

type GetBuildSuggestersVersionEnum string

const (
	GetBuildSuggestersVersionEnumTwoThousandAndThirteen0101 GetBuildSuggestersVersionEnum = "2013-01-01"
)

type GetBuildSuggestersQueryParams struct {
	Action     GetBuildSuggestersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                        `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetBuildSuggestersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetBuildSuggestersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBuildSuggestersRequest struct {
	QueryParams GetBuildSuggestersQueryParams
	Headers     GetBuildSuggestersHeaders
}

type GetBuildSuggestersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
