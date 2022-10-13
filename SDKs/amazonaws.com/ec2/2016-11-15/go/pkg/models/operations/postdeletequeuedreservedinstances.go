package operations

type PostDeleteQueuedReservedInstancesActionEnum string

const (
	PostDeleteQueuedReservedInstancesActionEnumDeleteQueuedReservedInstances PostDeleteQueuedReservedInstancesActionEnum = "DeleteQueuedReservedInstances"
)

type PostDeleteQueuedReservedInstancesVersionEnum string

const (
	PostDeleteQueuedReservedInstancesVersionEnumTwoThousandAndSixteen1115 PostDeleteQueuedReservedInstancesVersionEnum = "2016-11-15"
)

type PostDeleteQueuedReservedInstancesQueryParams struct {
	Action  PostDeleteQueuedReservedInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteQueuedReservedInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteQueuedReservedInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteQueuedReservedInstancesRequest struct {
	QueryParams PostDeleteQueuedReservedInstancesQueryParams
	Headers     PostDeleteQueuedReservedInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteQueuedReservedInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
