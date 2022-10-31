package operations

import (
	"openapi/pkg/models/shared"
)

type GlobalImageCategoriesPostFileRequests struct {
	ApplicationXML                                  []byte                                                 `request:"mediaType=application/xml"`
	GlobalResourcesSharedModelsGlobalImageCategory  *shared.GlobalResourcesSharedModelsGlobalImageCategory `request:"mediaType=application/json"`
	GlobalResourcesSharedModelsGlobalImageCategory1 *shared.GlobalResourcesSharedModelsGlobalImageCategory `request:"mediaType=application/x-www-form-urlencoded"`
	GlobalResourcesSharedModelsGlobalImageCategory2 *shared.GlobalResourcesSharedModelsGlobalImageCategory `request:"mediaType=text/json"`
	TextXML                                         []byte                                                 `request:"mediaType=text/xml"`
}

type GlobalImageCategoriesPostFileRequest struct {
	Request GlobalImageCategoriesPostFileRequests
}

type GlobalImageCategoriesPostFileResponse struct {
	APIModelsAPIError                                     *shared.APIModelsAPIError
	Body                                                  []byte
	ContentType                                           string
	GlobalImageCategoriesPostFile200ApplicationJSONString *string
	GlobalImageCategoriesPostFile200ApplicationXMLString  *string
	GlobalImageCategoriesPostFile200TextJSONString        *string
	GlobalImageCategoriesPostFile200TextXMLString         *string
	StatusCode                                            int64
}
