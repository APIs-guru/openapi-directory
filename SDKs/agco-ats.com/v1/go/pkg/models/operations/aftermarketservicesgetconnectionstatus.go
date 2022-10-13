package operations

import (
	"openapi/pkg/models/shared"
)

type AftermarketServicesGetConnectionStatusResponse struct {
	APIModelsAPIError                                               *shared.APIModelsAPIError
	AftermarketServicesGetConnectionStatus200ApplicationJSONBoolean *bool
	AftermarketServicesGetConnectionStatus200TextJSONBoolean        *bool
	Body                                                            []byte
	ContentType                                                     string
	StatusCode                                                      int64
}
