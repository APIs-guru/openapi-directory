package operations

type GetGetConsoleOutputActionEnum string

const (
	GetGetConsoleOutputActionEnumGetConsoleOutput GetGetConsoleOutputActionEnum = "GetConsoleOutput"
)

type GetGetConsoleOutputVersionEnum string

const (
	GetGetConsoleOutputVersionEnumTwoThousandAndSixteen1115 GetGetConsoleOutputVersionEnum = "2016-11-15"
)

type GetGetConsoleOutputQueryParams struct {
	Action     GetGetConsoleOutputActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                         `queryParam:"style=form,explode=true,name=InstanceId"`
	Latest     *bool                          `queryParam:"style=form,explode=true,name=Latest"`
	Version    GetGetConsoleOutputVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetConsoleOutputHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetConsoleOutputRequest struct {
	QueryParams GetGetConsoleOutputQueryParams
	Headers     GetGetConsoleOutputHeaders
}

type GetGetConsoleOutputResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
