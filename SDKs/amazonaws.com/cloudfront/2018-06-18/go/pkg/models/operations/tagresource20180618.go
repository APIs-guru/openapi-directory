package operations

type TagResource20180618OperationEnum string

const (
	TagResource20180618OperationEnumTag TagResource20180618OperationEnum = "Tag"
)

type TagResource20180618QueryParams struct {
	Operation TagResource20180618OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                           `queryParam:"style=form,explode=true,name=Resource"`
}

type TagResource20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResource20180618Request struct {
	QueryParams TagResource20180618QueryParams
	Headers     TagResource20180618Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type TagResource20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
