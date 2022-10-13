package shared

type GetAppsListResponse struct {
	AppsList    *AppsListData `json:"AppsList"`
	AppsListArn *string       `json:"AppsListArn"`
}
