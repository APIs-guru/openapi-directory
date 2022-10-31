package shared

import (
"time")

type ProductionBranch struct {
    BranchName *string `json:"branchName,omitempty"`
    LastDeployTime *time.Time `json:"lastDeployTime,omitempty"`
    Status *string `json:"status,omitempty"`
    ThumbnailURL *string `json:"thumbnailUrl,omitempty"`
    
}

