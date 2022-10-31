package operations

type PostRebootInstancesActionEnum string

const (
	PostRebootInstancesActionEnumRebootInstances PostRebootInstancesActionEnum = "RebootInstances"
)

type PostRebootInstancesVersionEnum string

const (
	PostRebootInstancesVersionEnumTwoThousandAndSixteen1115 PostRebootInstancesVersionEnum = "2016-11-15"
)

type PostRebootInstancesQueryParams struct {
	Action  PostRebootInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRebootInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRebootInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRebootInstancesRequest struct {
	QueryParams PostRebootInstancesQueryParams
	Headers     PostRebootInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRebootInstancesResponse struct {
	ContentType string
	StatusCode  int64
}
