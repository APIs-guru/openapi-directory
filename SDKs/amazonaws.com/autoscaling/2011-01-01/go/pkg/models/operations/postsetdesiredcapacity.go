package operations

type PostSetDesiredCapacityActionEnum string

const (
	PostSetDesiredCapacityActionEnumSetDesiredCapacity PostSetDesiredCapacityActionEnum = "SetDesiredCapacity"
)

type PostSetDesiredCapacityVersionEnum string

const (
	PostSetDesiredCapacityVersionEnumTwoThousandAndEleven0101 PostSetDesiredCapacityVersionEnum = "2011-01-01"
)

type PostSetDesiredCapacityQueryParams struct {
	Action  PostSetDesiredCapacityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetDesiredCapacityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetDesiredCapacityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetDesiredCapacityRequest struct {
	QueryParams PostSetDesiredCapacityQueryParams
	Headers     PostSetDesiredCapacityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetDesiredCapacityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
