package operations

type GetGetStatusActionEnum string

const (
	GetGetStatusActionEnumGetStatus GetGetStatusActionEnum = "GetStatus"
)

type GetGetStatusOperationEnum string

const (
	GetGetStatusOperationEnumGetStatus GetGetStatusOperationEnum = "GetStatus"
)

type GetGetStatusVersionEnum string

const (
	GetGetStatusVersionEnumTwoThousandAndTen0601 GetGetStatusVersionEnum = "2010-06-01"
)

type GetGetStatusQueryParams struct {
	APIVersion       *string                   `queryParam:"style=form,explode=true,name=APIVersion"`
	AwsAccessKeyID   string                    `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetGetStatusActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	JobID            string                    `queryParam:"style=form,explode=true,name=JobId"`
	Operation        GetGetStatusOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                    `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                    `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                    `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                    `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          GetGetStatusVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetStatusRequest struct {
	QueryParams GetGetStatusQueryParams
}

type GetGetStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
