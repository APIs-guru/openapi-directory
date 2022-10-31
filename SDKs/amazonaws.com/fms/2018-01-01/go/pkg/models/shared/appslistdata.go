package shared

import (
"time")

type AppsListData struct {
    AppsList []App `json:"AppsList"`
    CreateTime *time.Time `json:"CreateTime,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    ListID *string `json:"ListId,omitempty"`
    ListName string `json:"ListName"`
    ListUpdateToken *string `json:"ListUpdateToken,omitempty"`
    PreviousAppsList map[string][]App `json:"PreviousAppsList,omitempty"`
    
}

