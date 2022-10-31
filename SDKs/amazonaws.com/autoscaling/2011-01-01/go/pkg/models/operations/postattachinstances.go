package operations

type PostAttachInstancesActionEnum string

const (
	PostAttachInstancesActionEnumAttachInstances PostAttachInstancesActionEnum = "AttachInstances"
)

type PostAttachInstancesVersionEnum string

const (
	PostAttachInstancesVersionEnumTwoThousandAndEleven0101 PostAttachInstancesVersionEnum = "2011-01-01"
)

type PostAttachInstancesQueryParams struct {
	Action  PostAttachInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAttachInstancesRequest struct {
	QueryParams PostAttachInstancesQueryParams
	Headers     PostAttachInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
