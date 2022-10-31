package shared

import (
"time")

type ConformancePackStatusDetail struct {
    ConformancePackArn string `json:"ConformancePackArn"`
    ConformancePackID string `json:"ConformancePackId"`
    ConformancePackName string `json:"ConformancePackName"`
    ConformancePackState ConformancePackStateEnum `json:"ConformancePackState"`
    ConformancePackStatusReason *string `json:"ConformancePackStatusReason,omitempty"`
    LastUpdateCompletedTime *time.Time `json:"LastUpdateCompletedTime,omitempty"`
    LastUpdateRequestedTime time.Time `json:"LastUpdateRequestedTime"`
    StackArn string `json:"StackArn"`
    
}

