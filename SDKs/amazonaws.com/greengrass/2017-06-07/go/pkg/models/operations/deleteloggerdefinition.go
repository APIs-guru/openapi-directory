package operations

type DeleteLoggerDefinitionPathParams struct {
	LoggerDefinitionID string `pathParam:"style=simple,explode=false,name=LoggerDefinitionId"`
}

type DeleteLoggerDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteLoggerDefinitionRequest struct {
	PathParams DeleteLoggerDefinitionPathParams
	Headers    DeleteLoggerDefinitionHeaders
}

type DeleteLoggerDefinitionResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	DeleteLoggerDefinitionResponse map[string]interface{}
	StatusCode                     int64
}
