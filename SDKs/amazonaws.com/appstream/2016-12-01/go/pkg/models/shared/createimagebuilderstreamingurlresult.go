package shared

import (
"time")

type CreateImageBuilderStreamingURLResult struct {
    Expires *time.Time `json:"Expires,omitempty"`
    StreamingURL *string `json:"StreamingURL,omitempty"`
    
}

