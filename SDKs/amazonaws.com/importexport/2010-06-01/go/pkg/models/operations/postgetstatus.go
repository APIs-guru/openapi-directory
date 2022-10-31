package operations

type PostGetStatusActionEnum string

const (
	PostGetStatusActionEnumGetStatus PostGetStatusActionEnum = "GetStatus"
)

type PostGetStatusOperationEnum string

const (
	PostGetStatusOperationEnumGetStatus PostGetStatusOperationEnum = "GetStatus"
)

type PostGetStatusVersionEnum string

const (
	PostGetStatusVersionEnumTwoThousandAndTen0601 PostGetStatusVersionEnum = "2010-06-01"
)

type PostGetStatusQueryParams struct {
	AwsAccessKeyID   string                     `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostGetStatusActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Operation        PostGetStatusOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                     `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                     `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                     `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                     `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostGetStatusVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetStatusRequest struct {
	QueryParams PostGetStatusQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
