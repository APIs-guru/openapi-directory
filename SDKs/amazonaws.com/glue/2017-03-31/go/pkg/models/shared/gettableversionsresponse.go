package shared

type GetTableVersionsResponse struct {
	NextToken     *string        `json:"NextToken"`
	TableVersions []TableVersion `json:"TableVersions"`
}
