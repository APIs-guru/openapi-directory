package operations

import (
	"openapi/pkg/models/shared"
)

type ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams struct {
	ContentSubmissionAttributeID int32 `pathParam:"style=simple,explode=false,name=contentSubmissionAttributeID"`
}

type ContentSubmissionsPutContentSubmissionAttributeAsyncRequests struct {
	ApplicationXML                                                     []byte                                                                    `request:"mediaType=application/xml"`
	ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute  *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `request:"mediaType=application/json"`
	ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `request:"mediaType=application/x-www-form-urlencoded"`
	ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2 *shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `request:"mediaType=text/json"`
	TextXML                                                            []byte                                                                    `request:"mediaType=text/xml"`
}

type ContentSubmissionsPutContentSubmissionAttributeAsyncRequest struct {
	PathParams ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams
	Request    ContentSubmissionsPutContentSubmissionAttributeAsyncRequests
}

type ContentSubmissionsPutContentSubmissionAttributeAsyncResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
