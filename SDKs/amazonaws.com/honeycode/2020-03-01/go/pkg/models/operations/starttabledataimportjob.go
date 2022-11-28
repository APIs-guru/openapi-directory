package operations

import (
	"openapi/pkg/models/shared"
)

type StartTableDataImportJobPathParams struct {
	TableID    string `pathParam:"style=simple,explode=false,name=tableId"`
	WorkbookID string `pathParam:"style=simple,explode=false,name=workbookId"`
}

type StartTableDataImportJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type StartTableDataImportJobRequestBodyDataFormatEnum string

const (
	StartTableDataImportJobRequestBodyDataFormatEnumDelimitedText StartTableDataImportJobRequestBodyDataFormatEnum = "DELIMITED_TEXT"
)

// StartTableDataImportJobRequestBodyDataSource
// An object that has details about the source of the data that was submitted for import.
type StartTableDataImportJobRequestBodyDataSource struct {
	DataSourceConfig *shared.ImportDataSourceConfig `json:"dataSourceConfig,omitempty"`
}

// StartTableDataImportJobRequestBodyImportOptions
// An object that contains the options specified by the sumitter of the import request.
type StartTableDataImportJobRequestBodyImportOptions struct {
	DelimitedTextOptions *shared.DelimitedTextImportOptions `json:"delimitedTextOptions,omitempty"`
	DestinationOptions   *shared.DestinationOptions         `json:"destinationOptions,omitempty"`
}

type StartTableDataImportJobRequestBody struct {
	ClientRequestToken string                                           `json:"clientRequestToken"`
	DataFormat         StartTableDataImportJobRequestBodyDataFormatEnum `json:"dataFormat"`
	DataSource         StartTableDataImportJobRequestBodyDataSource     `json:"dataSource"`
	ImportOptions      StartTableDataImportJobRequestBodyImportOptions  `json:"importOptions"`
}

type StartTableDataImportJobRequest struct {
	PathParams StartTableDataImportJobPathParams
	Headers    StartTableDataImportJobHeaders
	Request    StartTableDataImportJobRequestBody `request:"mediaType=application/json"`
}

type StartTableDataImportJobResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StartTableDataImportJobResult *shared.StartTableDataImportJobResult
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
