package operations

type GetFunction20200531PathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type GetFunction20200531StageEnum string

const (
	GetFunction20200531StageEnumDevelopment GetFunction20200531StageEnum = "DEVELOPMENT"
	GetFunction20200531StageEnumLive        GetFunction20200531StageEnum = "LIVE"
)

type GetFunction20200531QueryParams struct {
	Stage *GetFunction20200531StageEnum `queryParam:"style=form,explode=true,name=Stage"`
}

type GetFunction20200531Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetFunction20200531Request struct {
	PathParams  GetFunction20200531PathParams
	QueryParams GetFunction20200531QueryParams
	Headers     GetFunction20200531Headers
}

type GetFunction20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
