package shared

type DescribeContinuousExportsResponse struct {
	Descriptions []ContinuousExportDescription `json:"descriptions"`
	NextToken    *string                       `json:"nextToken"`
}
