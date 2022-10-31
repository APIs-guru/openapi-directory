package shared



type Task struct {
    ProgressPercent *int64 `json:"ProgressPercent,omitempty"`
    Status StatusEnum `json:"Status"`
    StatusDetail *string `json:"StatusDetail,omitempty"`
    
}

