package operations

import (
	"openapi/pkg/models/shared"
)

type FilesPutFileContentsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type FilesPutFileContentsRequest struct {
	PathParams FilesPutFileContentsPathParams
}

type FilesPutFileContentsResponse struct {
	APIModelsAPIError *shared.APIModelsAPIError
	Body              []byte
	ContentType       string
	StatusCode        int64
	SystemObject      map[string]interface{}
}
