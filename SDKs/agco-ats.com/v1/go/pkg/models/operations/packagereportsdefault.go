package operations

import (
	"openapi/pkg/models/shared"
)

type PackageReportsDefaultPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=ClientID"`
}

type PackageReportsDefaultRequest struct {
	PathParams PackageReportsDefaultPathParams
}

type PackageReportsDefaultResponse struct {
	APIModelsAPIError                *shared.APIModelsAPIError
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	UpdateSystemModelsPackageReports []shared.UpdateSystemModelsPackageReport
}
