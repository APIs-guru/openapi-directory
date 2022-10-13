package operations

type UntagResource20171030OperationEnum string

const (
	UntagResource20171030OperationEnumUntag UntagResource20171030OperationEnum = "Untag"
)

type UntagResource20171030QueryParams struct {
	Operation UntagResource20171030OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                             `queryParam:"style=form,explode=true,name=Resource"`
}

type UntagResource20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResource20171030Request struct {
	QueryParams UntagResource20171030QueryParams
	Headers     UntagResource20171030Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type UntagResource20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
