package operations

type GetDeleteInstanceEventWindowActionEnum string

const (
	GetDeleteInstanceEventWindowActionEnumDeleteInstanceEventWindow GetDeleteInstanceEventWindowActionEnum = "DeleteInstanceEventWindow"
)

type GetDeleteInstanceEventWindowVersionEnum string

const (
	GetDeleteInstanceEventWindowVersionEnumTwoThousandAndSixteen1115 GetDeleteInstanceEventWindowVersionEnum = "2016-11-15"
)

type GetDeleteInstanceEventWindowQueryParams struct {
	Action                GetDeleteInstanceEventWindowActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	ForceDelete           *bool                                   `queryParam:"style=form,explode=true,name=ForceDelete"`
	InstanceEventWindowID string                                  `queryParam:"style=form,explode=true,name=InstanceEventWindowId"`
	Version               GetDeleteInstanceEventWindowVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteInstanceEventWindowHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteInstanceEventWindowRequest struct {
	QueryParams GetDeleteInstanceEventWindowQueryParams
	Headers     GetDeleteInstanceEventWindowHeaders
}

type GetDeleteInstanceEventWindowResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
