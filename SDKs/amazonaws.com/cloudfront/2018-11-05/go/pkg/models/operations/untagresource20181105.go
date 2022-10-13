package operations

type UntagResource20181105OperationEnum string

const (
	UntagResource20181105OperationEnumUntag UntagResource20181105OperationEnum = "Untag"
)

type UntagResource20181105QueryParams struct {
	Operation UntagResource20181105OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                             `queryParam:"style=form,explode=true,name=Resource"`
}

type UntagResource20181105Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResource20181105Request struct {
	QueryParams UntagResource20181105QueryParams
	Headers     UntagResource20181105Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type UntagResource20181105Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
