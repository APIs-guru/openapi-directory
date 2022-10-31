package shared

type PutAppsListResponse struct {
	AppsList    *AppsListData `json:"AppsList,omitempty"`
	AppsListArn *string       `json:"AppsListArn,omitempty"`
}
