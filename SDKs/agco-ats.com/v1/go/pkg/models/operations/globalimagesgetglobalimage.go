package operations

import (
	"openapi/pkg/models/shared"
)

type GlobalImagesGetGlobalImagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type GlobalImagesGetGlobalImageRequest struct {
	PathParams GlobalImagesGetGlobalImagePathParams
}

type GlobalImagesGetGlobalImageResponse struct {
	APIModelsAPIError                      *shared.APIModelsAPIError
	Body                                   []byte
	ContentType                            string
	GlobalResourcesSharedModelsGlobalImage *shared.GlobalResourcesSharedModelsGlobalImage
	StatusCode                             int64
}
