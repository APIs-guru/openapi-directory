package shared

import (
	"time"
)

// GetOpenIDConnectProviderResponse
// Contains the response to a successful <a>GetOpenIDConnectProvider</a> request.
type GetOpenIDConnectProviderResponse struct {
	ClientIDList   []string
	CreateDate     *time.Time
	Tags           []Tag
	ThumbprintList []string
	URL            *string
}
