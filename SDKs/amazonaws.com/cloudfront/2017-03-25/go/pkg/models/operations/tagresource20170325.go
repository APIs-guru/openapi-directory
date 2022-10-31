package operations

type TagResource20170325OperationEnum string

const (
	TagResource20170325OperationEnumTag TagResource20170325OperationEnum = "Tag"
)

type TagResource20170325QueryParams struct {
	Operation TagResource20170325OperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Resource  string                           `queryParam:"style=form,explode=true,name=Resource"`
}

type TagResource20170325Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type TagResource20170325Request struct {
	QueryParams TagResource20170325QueryParams
	Headers     TagResource20170325Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type TagResource20170325Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
