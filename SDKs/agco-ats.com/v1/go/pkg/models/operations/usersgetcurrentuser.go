package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetCurrentUserResponse struct {
	APIModelsUser *shared.APIModelsUser
	Body          []byte
	ContentType   string
	StatusCode    int64
}
