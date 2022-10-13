package operations

type GetSwapEnvironmentCnamEsActionEnum string

const (
	GetSwapEnvironmentCnamEsActionEnumSwapEnvironmentCnamEs GetSwapEnvironmentCnamEsActionEnum = "SwapEnvironmentCNAMEs"
)

type GetSwapEnvironmentCnamEsVersionEnum string

const (
	GetSwapEnvironmentCnamEsVersionEnumTwoThousandAndTen1201 GetSwapEnvironmentCnamEsVersionEnum = "2010-12-01"
)

type GetSwapEnvironmentCnamEsQueryParams struct {
	Action                     GetSwapEnvironmentCnamEsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DestinationEnvironmentID   *string                             `queryParam:"style=form,explode=true,name=DestinationEnvironmentId"`
	DestinationEnvironmentName *string                             `queryParam:"style=form,explode=true,name=DestinationEnvironmentName"`
	SourceEnvironmentID        *string                             `queryParam:"style=form,explode=true,name=SourceEnvironmentId"`
	SourceEnvironmentName      *string                             `queryParam:"style=form,explode=true,name=SourceEnvironmentName"`
	Version                    GetSwapEnvironmentCnamEsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSwapEnvironmentCnamEsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSwapEnvironmentCnamEsRequest struct {
	QueryParams GetSwapEnvironmentCnamEsQueryParams
	Headers     GetSwapEnvironmentCnamEsHeaders
}

type GetSwapEnvironmentCnamEsResponse struct {
	ContentType string
	StatusCode  int64
}
