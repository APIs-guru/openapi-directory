package operations

type UntagResource20161125OperationEnum string

const (
	UntagResource20161125OperationEnumUntag UntagResource20161125OperationEnum = "Untag"
)

type UntagResource20161125QueryParams struct {
	Operation UntagResource20161125OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                             `queryParam:"style=form,explode=true,name=Resource"`
}

type UntagResource20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResource20161125Request struct {
	QueryParams UntagResource20161125QueryParams
	Headers     UntagResource20161125Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type UntagResource20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
