package shared

import (
"time")

type Backup struct {
    BackupID string `json:"BackupId"`
    BackupState *BackupStateEnum `json:"BackupState,omitempty"`
    ClusterID *string `json:"ClusterId,omitempty"`
    CopyTimestamp *time.Time `json:"CopyTimestamp,omitempty"`
    CreateTimestamp *time.Time `json:"CreateTimestamp,omitempty"`
    DeleteTimestamp *time.Time `json:"DeleteTimestamp,omitempty"`
    NeverExpires *bool `json:"NeverExpires,omitempty"`
    SourceBackup *string `json:"SourceBackup,omitempty"`
    SourceCluster *string `json:"SourceCluster,omitempty"`
    SourceRegion *string `json:"SourceRegion,omitempty"`
    TagList []Tag `json:"TagList,omitempty"`
    
}

