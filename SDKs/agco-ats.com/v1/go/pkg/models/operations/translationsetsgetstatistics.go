package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationSetsGetStatisticsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationSetsGetStatisticsRequest struct {
	PathParams TranslationSetsGetStatisticsPathParams
}

type TranslationSetsGetStatisticsResponse struct {
	APIModelsAPIError                                   *shared.APIModelsAPIError
	Body                                                []byte
	ContentType                                         string
	GlobalResourcesSharedModelsTranslationSetStatistics *shared.GlobalResourcesSharedModelsTranslationSetStatistics
	StatusCode                                          int64
}
