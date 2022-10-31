package shared



type AttemptRead struct {
    BytesSynced *int64 `json:"bytesSynced,omitempty"`
    CreatedAt int64 `json:"createdAt"`
    EndedAt *int64 `json:"endedAt,omitempty"`
    ID int64 `json:"id"`
    RecordsSynced *int64 `json:"recordsSynced,omitempty"`
    Status AttemptStatusEnum `json:"status"`
    UpdatedAt int64 `json:"updatedAt"`
    
}

