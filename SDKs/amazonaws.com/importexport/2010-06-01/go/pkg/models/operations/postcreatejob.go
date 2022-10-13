package operations

type PostCreateJobActionEnum string

const (
	PostCreateJobActionEnumCreateJob PostCreateJobActionEnum = "CreateJob"
)

type PostCreateJobOperationEnum string

const (
	PostCreateJobOperationEnumCreateJob PostCreateJobOperationEnum = "CreateJob"
)

type PostCreateJobVersionEnum string

const (
	PostCreateJobVersionEnumTwoThousandAndTen0601 PostCreateJobVersionEnum = "2010-06-01"
)

type PostCreateJobQueryParams struct {
	AwsAccessKeyID   string                     `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostCreateJobActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Operation        PostCreateJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                     `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                     `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                     `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                     `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostCreateJobVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateJobRequest struct {
	QueryParams PostCreateJobQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
