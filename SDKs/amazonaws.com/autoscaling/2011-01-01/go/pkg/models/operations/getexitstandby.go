package operations

type GetExitStandbyActionEnum string

const (
	GetExitStandbyActionEnumExitStandby GetExitStandbyActionEnum = "ExitStandby"
)

type GetExitStandbyVersionEnum string

const (
	GetExitStandbyVersionEnumTwoThousandAndEleven0101 GetExitStandbyVersionEnum = "2011-01-01"
)

type GetExitStandbyQueryParams struct {
	Action               GetExitStandbyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                    `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	InstanceIds          []string                  `queryParam:"style=form,explode=true,name=InstanceIds"`
	Version              GetExitStandbyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetExitStandbyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExitStandbyRequest struct {
	QueryParams GetExitStandbyQueryParams
	Headers     GetExitStandbyHeaders
}

type GetExitStandbyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
