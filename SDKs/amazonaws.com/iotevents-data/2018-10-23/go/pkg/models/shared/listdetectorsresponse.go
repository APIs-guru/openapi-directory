package shared

type ListDetectorsResponse struct {
	DetectorSummaries []DetectorSummary `json:"detectorSummaries,omitempty"`
	NextToken         *string           `json:"nextToken,omitempty"`
}
