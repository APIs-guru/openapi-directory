package shared



type GetAppsListResponse struct {
    AppsList *AppsListData `json:"AppsList,omitempty"`
    AppsListArn *string `json:"AppsListArn,omitempty"`
    
}

