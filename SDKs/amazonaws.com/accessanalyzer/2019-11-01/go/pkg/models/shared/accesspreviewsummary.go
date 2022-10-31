package shared

import (
"time")

type AccessPreviewSummary struct {
    AnalyzerArn string `json:"analyzerArn"`
    CreatedAt time.Time `json:"createdAt"`
    ID string `json:"id"`
    Status AccessPreviewStatusEnum `json:"status"`
    StatusReason *AccessPreviewStatusReason `json:"statusReason,omitempty"`
    
}

