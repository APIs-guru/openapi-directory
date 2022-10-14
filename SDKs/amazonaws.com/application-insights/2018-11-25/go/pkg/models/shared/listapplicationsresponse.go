package shared

type ListApplicationsResponse struct {
	ApplicationInfoList []ApplicationInfo `json:"ApplicationInfoList,omitempty"`
	NextToken           *string           `json:"NextToken,omitempty"`
}
