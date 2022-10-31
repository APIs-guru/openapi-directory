package operations

type TagResource20161125OperationEnum string

const (
	TagResource20161125OperationEnumTag TagResource20161125OperationEnum = "Tag"
)

type TagResource20161125QueryParams struct {
	Operation TagResource20161125OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                           `queryParam:"style=form,explode=true,name=Resource"`
}

type TagResource20161125Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TagResource20161125Request struct {
	QueryParams TagResource20161125QueryParams
	Headers     TagResource20161125Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type TagResource20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
