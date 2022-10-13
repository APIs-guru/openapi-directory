package shared

type AppsListDataSummary struct {
	AppsList []App   `json:"AppsList"`
	ListArn  *string `json:"ListArn"`
	ListID   *string `json:"ListId"`
	ListName *string `json:"ListName"`
}
