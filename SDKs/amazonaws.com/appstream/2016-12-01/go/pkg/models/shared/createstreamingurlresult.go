package shared

import (
"time")

type CreateStreamingURLResult struct {
    Expires *time.Time `json:"Expires,omitempty"`
    StreamingURL *string `json:"StreamingURL,omitempty"`
    
}

