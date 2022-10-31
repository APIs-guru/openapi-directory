package operations

type PostMonitorInstancesActionEnum string

const (
	PostMonitorInstancesActionEnumMonitorInstances PostMonitorInstancesActionEnum = "MonitorInstances"
)

type PostMonitorInstancesVersionEnum string

const (
	PostMonitorInstancesVersionEnumTwoThousandAndSixteen1115 PostMonitorInstancesVersionEnum = "2016-11-15"
)

type PostMonitorInstancesQueryParams struct {
	Action  PostMonitorInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostMonitorInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostMonitorInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostMonitorInstancesRequest struct {
	QueryParams PostMonitorInstancesQueryParams
	Headers     PostMonitorInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostMonitorInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
