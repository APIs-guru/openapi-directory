package shared

import (
"time")

type CreateAPIDestinationResponse struct {
    APIDestinationArn *string `json:"ApiDestinationArn,omitempty"`
    APIDestinationState *APIDestinationStateEnum `json:"ApiDestinationState,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    
}

