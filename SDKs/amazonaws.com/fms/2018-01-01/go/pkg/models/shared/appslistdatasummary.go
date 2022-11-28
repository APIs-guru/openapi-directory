package shared

// AppsListDataSummary
// Details of the Firewall Manager applications list.
type AppsListDataSummary struct {
	AppsList []App   `json:"AppsList,omitempty"`
	ListArn  *string `json:"ListArn,omitempty"`
	ListID   *string `json:"ListId,omitempty"`
	ListName *string `json:"ListName,omitempty"`
}
