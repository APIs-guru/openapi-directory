package operations

type GetTerminateEnvironmentActionEnum string

const (
	GetTerminateEnvironmentActionEnumTerminateEnvironment GetTerminateEnvironmentActionEnum = "TerminateEnvironment"
)

type GetTerminateEnvironmentVersionEnum string

const (
	GetTerminateEnvironmentVersionEnumTwoThousandAndTen1201 GetTerminateEnvironmentVersionEnum = "2010-12-01"
)

type GetTerminateEnvironmentQueryParams struct {
	Action             GetTerminateEnvironmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EnvironmentID      *string                            `queryParam:"style=form,explode=true,name=EnvironmentId"`
	EnvironmentName    *string                            `queryParam:"style=form,explode=true,name=EnvironmentName"`
	ForceTerminate     *bool                              `queryParam:"style=form,explode=true,name=ForceTerminate"`
	TerminateResources *bool                              `queryParam:"style=form,explode=true,name=TerminateResources"`
	Version            GetTerminateEnvironmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTerminateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetTerminateEnvironmentRequest struct {
	QueryParams GetTerminateEnvironmentQueryParams
	Headers     GetTerminateEnvironmentHeaders
}

type GetTerminateEnvironmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
