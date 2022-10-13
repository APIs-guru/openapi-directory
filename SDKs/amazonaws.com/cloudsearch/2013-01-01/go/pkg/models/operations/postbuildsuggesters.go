package operations

type PostBuildSuggestersActionEnum string

const (
	PostBuildSuggestersActionEnumBuildSuggesters PostBuildSuggestersActionEnum = "BuildSuggesters"
)

type PostBuildSuggestersVersionEnum string

const (
	PostBuildSuggestersVersionEnumTwoThousandAndThirteen0101 PostBuildSuggestersVersionEnum = "2013-01-01"
)

type PostBuildSuggestersQueryParams struct {
	Action  PostBuildSuggestersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBuildSuggestersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBuildSuggestersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostBuildSuggestersRequest struct {
	QueryParams PostBuildSuggestersQueryParams
	Headers     PostBuildSuggestersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBuildSuggestersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
