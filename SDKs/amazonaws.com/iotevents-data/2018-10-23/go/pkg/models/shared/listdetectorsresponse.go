package shared

type ListDetectorsResponse struct {
	DetectorSummaries []DetectorSummary `json:"detectorSummaries"`
	NextToken         *string           `json:"nextToken"`
}
