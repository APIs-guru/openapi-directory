package shared



type PutAppsListRequest struct {
    AppsList AppsListData `json:"AppsList"`
    TagList []Tag `json:"TagList,omitempty"`
    
}

