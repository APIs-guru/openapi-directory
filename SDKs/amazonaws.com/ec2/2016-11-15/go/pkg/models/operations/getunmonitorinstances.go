package operations

type GetUnmonitorInstancesActionEnum string

const (
	GetUnmonitorInstancesActionEnumUnmonitorInstances GetUnmonitorInstancesActionEnum = "UnmonitorInstances"
)

type GetUnmonitorInstancesVersionEnum string

const (
	GetUnmonitorInstancesVersionEnumTwoThousandAndSixteen1115 GetUnmonitorInstancesVersionEnum = "2016-11-15"
)

type GetUnmonitorInstancesQueryParams struct {
	Action     GetUnmonitorInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                            `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID []string                         `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetUnmonitorInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUnmonitorInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUnmonitorInstancesRequest struct {
	QueryParams GetUnmonitorInstancesQueryParams
	Headers     GetUnmonitorInstancesHeaders
}

type GetUnmonitorInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
