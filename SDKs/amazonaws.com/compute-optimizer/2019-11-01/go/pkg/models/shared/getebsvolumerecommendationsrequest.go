package shared

type GetEbsVolumeRecommendationsRequest struct {
	AccountIds []string    `json:"accountIds,omitempty"`
	Filters    []EbsFilter `json:"filters,omitempty"`
	MaxResults *int64      `json:"maxResults,omitempty"`
	NextToken  *string     `json:"nextToken,omitempty"`
	VolumeArns []string    `json:"volumeArns,omitempty"`
}
