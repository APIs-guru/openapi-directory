package operations

type UntagResource20200531OperationEnum string

const (
	UntagResource20200531OperationEnumUntag UntagResource20200531OperationEnum = "Untag"
)

type UntagResource20200531QueryParams struct {
	Operation UntagResource20200531OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                             `queryParam:"style=form,explode=true,name=Resource"`
}

type UntagResource20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResource20200531Request struct {
	QueryParams UntagResource20200531QueryParams
	Headers     UntagResource20200531Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type UntagResource20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
