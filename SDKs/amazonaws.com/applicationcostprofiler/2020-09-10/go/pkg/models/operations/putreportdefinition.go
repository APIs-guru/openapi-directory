package operations

import (
	"openapi/pkg/models/shared"
)

type PutReportDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutReportDefinitionRequestBodyDestinationS3Location struct {
	Bucket *string `json:"bucket"`
	Prefix *string `json:"prefix"`
}

type PutReportDefinitionRequestBodyFormatEnum string

const (
	PutReportDefinitionRequestBodyFormatEnumCsv     PutReportDefinitionRequestBodyFormatEnum = "CSV"
	PutReportDefinitionRequestBodyFormatEnumParquet PutReportDefinitionRequestBodyFormatEnum = "PARQUET"
)

type PutReportDefinitionRequestBodyReportFrequencyEnum string

const (
	PutReportDefinitionRequestBodyReportFrequencyEnumMonthly PutReportDefinitionRequestBodyReportFrequencyEnum = "MONTHLY"
	PutReportDefinitionRequestBodyReportFrequencyEnumDaily   PutReportDefinitionRequestBodyReportFrequencyEnum = "DAILY"
	PutReportDefinitionRequestBodyReportFrequencyEnumAll     PutReportDefinitionRequestBodyReportFrequencyEnum = "ALL"
)

type PutReportDefinitionRequestBody struct {
	DestinationS3Location PutReportDefinitionRequestBodyDestinationS3Location `json:"destinationS3Location"`
	Format                PutReportDefinitionRequestBodyFormatEnum            `json:"format"`
	ReportDescription     string                                              `json:"reportDescription"`
	ReportFrequency       PutReportDefinitionRequestBodyReportFrequencyEnum   `json:"reportFrequency"`
	ReportID              string                                              `json:"reportId"`
}

type PutReportDefinitionRequest struct {
	Headers PutReportDefinitionHeaders
	Request PutReportDefinitionRequestBody `request:"mediaType=application/json"`
}

type PutReportDefinitionResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	PutReportDefinitionResult     *shared.PutReportDefinitionResult
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
