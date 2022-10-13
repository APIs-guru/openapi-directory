package shared

type GetBlueprintRunsRequest struct {
	BlueprintName string  `json:"BlueprintName"`
	MaxResults    *int64  `json:"MaxResults"`
	NextToken     *string `json:"NextToken"`
}
