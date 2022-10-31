package operations

type GetAttachInstancesActionEnum string

const (
	GetAttachInstancesActionEnumAttachInstances GetAttachInstancesActionEnum = "AttachInstances"
)

type GetAttachInstancesVersionEnum string

const (
	GetAttachInstancesVersionEnumTwoThousandAndEleven0101 GetAttachInstancesVersionEnum = "2011-01-01"
)

type GetAttachInstancesQueryParams struct {
	Action               GetAttachInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                        `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	InstanceIds          []string                      `queryParam:"style=form,explode=true,name=InstanceIds"`
	Version              GetAttachInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAttachInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAttachInstancesRequest struct {
	QueryParams GetAttachInstancesQueryParams
	Headers     GetAttachInstancesHeaders
}

type GetAttachInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
