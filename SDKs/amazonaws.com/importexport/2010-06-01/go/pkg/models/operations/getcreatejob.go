package operations

type GetCreateJobActionEnum string

const (
	GetCreateJobActionEnumCreateJob GetCreateJobActionEnum = "CreateJob"
)

type GetCreateJobJobTypeEnum string

const (
	GetCreateJobJobTypeEnumImport GetCreateJobJobTypeEnum = "Import"
	GetCreateJobJobTypeEnumExport GetCreateJobJobTypeEnum = "Export"
)

type GetCreateJobOperationEnum string

const (
	GetCreateJobOperationEnumCreateJob GetCreateJobOperationEnum = "CreateJob"
)

type GetCreateJobVersionEnum string

const (
	GetCreateJobVersionEnumTwoThousandAndTen0601 GetCreateJobVersionEnum = "2010-06-01"
)

type GetCreateJobQueryParams struct {
	APIVersion       *string                   `queryParam:"style=form,explode=true,name=APIVersion"`
	AwsAccessKeyID   string                    `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetCreateJobActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	JobType          GetCreateJobJobTypeEnum   `queryParam:"style=form,explode=true,name=JobType"`
	Manifest         string                    `queryParam:"style=form,explode=true,name=Manifest"`
	ManifestAddendum *string                   `queryParam:"style=form,explode=true,name=ManifestAddendum"`
	Operation        GetCreateJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                    `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                    `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                    `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                    `queryParam:"style=form,explode=true,name=Timestamp"`
	ValidateOnly     bool                      `queryParam:"style=form,explode=true,name=ValidateOnly"`
	Version          GetCreateJobVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateJobRequest struct {
	QueryParams GetCreateJobQueryParams
}

type GetCreateJobResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
