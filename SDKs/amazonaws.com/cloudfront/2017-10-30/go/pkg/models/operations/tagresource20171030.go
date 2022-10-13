package operations

type TagResource20171030OperationEnum string

const (
	TagResource20171030OperationEnumTag TagResource20171030OperationEnum = "Tag"
)

type TagResource20171030QueryParams struct {
	Operation TagResource20171030OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                           `queryParam:"style=form,explode=true,name=Resource"`
}

type TagResource20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TagResource20171030Request struct {
	QueryParams TagResource20171030QueryParams
	Headers     TagResource20171030Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type TagResource20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
