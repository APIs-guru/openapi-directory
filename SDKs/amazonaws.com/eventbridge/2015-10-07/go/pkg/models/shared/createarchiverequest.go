package shared



type CreateArchiveRequest struct {
    ArchiveName string `json:"ArchiveName"`
    Description *string `json:"Description,omitempty"`
    EventPattern *string `json:"EventPattern,omitempty"`
    EventSourceArn string `json:"EventSourceArn"`
    RetentionDays *int64 `json:"RetentionDays,omitempty"`
    
}

