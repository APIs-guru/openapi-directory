package shared

type ListApplicationsResponse struct {
	ApplicationInfoList []ApplicationInfo `json:"ApplicationInfoList"`
	NextToken           *string           `json:"NextToken"`
}
