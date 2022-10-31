package operations

import (
	"openapi/pkg/models/shared"
)

type PriorityPackagesGetPriorityPackagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type PriorityPackagesGetPriorityPackageRequest struct {
	PathParams PriorityPackagesGetPriorityPackagePathParams
}

type PriorityPackagesGetPriorityPackageResponse struct {
	APIModelsAPIError                 *shared.APIModelsAPIError
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
	UpdateSystemModelsPriorityPackage *shared.UpdateSystemModelsPriorityPackage
}
