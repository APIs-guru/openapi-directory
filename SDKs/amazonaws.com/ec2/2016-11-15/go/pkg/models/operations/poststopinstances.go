package operations

type PostStopInstancesActionEnum string

const (
	PostStopInstancesActionEnumStopInstances PostStopInstancesActionEnum = "StopInstances"
)

type PostStopInstancesVersionEnum string

const (
	PostStopInstancesVersionEnumTwoThousandAndSixteen1115 PostStopInstancesVersionEnum = "2016-11-15"
)

type PostStopInstancesQueryParams struct {
	Action  PostStopInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStopInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStopInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStopInstancesRequest struct {
	QueryParams PostStopInstancesQueryParams
	Headers     PostStopInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStopInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
