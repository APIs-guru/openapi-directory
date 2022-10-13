package shared

type GetEbsVolumeRecommendationsRequest struct {
	AccountIds []string    `json:"accountIds"`
	Filters    []EbsFilter `json:"filters"`
	MaxResults *int64      `json:"maxResults"`
	NextToken  *string     `json:"nextToken"`
	VolumeArns []string    `json:"volumeArns"`
}
