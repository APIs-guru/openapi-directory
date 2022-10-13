package shared

type PutAppsListResponse struct {
	AppsList    *AppsListData `json:"AppsList"`
	AppsListArn *string       `json:"AppsListArn"`
}
