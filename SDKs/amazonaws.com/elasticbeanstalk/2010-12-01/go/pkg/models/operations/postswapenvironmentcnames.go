package operations

type PostSwapEnvironmentCnamEsActionEnum string

const (
	PostSwapEnvironmentCnamEsActionEnumSwapEnvironmentCnamEs PostSwapEnvironmentCnamEsActionEnum = "SwapEnvironmentCNAMEs"
)

type PostSwapEnvironmentCnamEsVersionEnum string

const (
	PostSwapEnvironmentCnamEsVersionEnumTwoThousandAndTen1201 PostSwapEnvironmentCnamEsVersionEnum = "2010-12-01"
)

type PostSwapEnvironmentCnamEsQueryParams struct {
	Action  PostSwapEnvironmentCnamEsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSwapEnvironmentCnamEsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSwapEnvironmentCnamEsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSwapEnvironmentCnamEsRequest struct {
	QueryParams PostSwapEnvironmentCnamEsQueryParams
	Headers     PostSwapEnvironmentCnamEsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSwapEnvironmentCnamEsResponse struct {
	ContentType string
	StatusCode  int64
}
