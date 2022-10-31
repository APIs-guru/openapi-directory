package operations

type GetCancelInstanceRefreshActionEnum string

const (
	GetCancelInstanceRefreshActionEnumCancelInstanceRefresh GetCancelInstanceRefreshActionEnum = "CancelInstanceRefresh"
)

type GetCancelInstanceRefreshVersionEnum string

const (
	GetCancelInstanceRefreshVersionEnumTwoThousandAndEleven0101 GetCancelInstanceRefreshVersionEnum = "2011-01-01"
)

type GetCancelInstanceRefreshQueryParams struct {
	Action               GetCancelInstanceRefreshActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                              `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	Version              GetCancelInstanceRefreshVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelInstanceRefreshHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCancelInstanceRefreshRequest struct {
	QueryParams GetCancelInstanceRefreshQueryParams
	Headers     GetCancelInstanceRefreshHeaders
}

type GetCancelInstanceRefreshResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
