package operations

type GetReleaseHostsActionEnum string

const (
	GetReleaseHostsActionEnumReleaseHosts GetReleaseHostsActionEnum = "ReleaseHosts"
)

type GetReleaseHostsVersionEnum string

const (
	GetReleaseHostsVersionEnumTwoThousandAndSixteen1115 GetReleaseHostsVersionEnum = "2016-11-15"
)

type GetReleaseHostsQueryParams struct {
	Action  GetReleaseHostsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HostID  []string                   `queryParam:"style=form,explode=true,name=HostId"`
	Version GetReleaseHostsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetReleaseHostsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReleaseHostsRequest struct {
	QueryParams GetReleaseHostsQueryParams
	Headers     GetReleaseHostsHeaders
}

type GetReleaseHostsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
