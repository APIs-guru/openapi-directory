package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstallStatusResponse struct {
	ContentType                                  string
	InstallStatus                                *shared.InstallStatus
	StatusCode                                   int64
	GetInstallStatusDefaultApplicationJSONString *string
}
