package operations

type TagResource20200531OperationEnum string

const (
	TagResource20200531OperationEnumTag TagResource20200531OperationEnum = "Tag"
)

type TagResource20200531QueryParams struct {
	Operation TagResource20200531OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                           `queryParam:"style=form,explode=true,name=Resource"`
}

type TagResource20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResource20200531Request struct {
	QueryParams TagResource20200531QueryParams
	Headers     TagResource20200531Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type TagResource20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
