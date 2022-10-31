package shared

type ListDetectorModelVersionsResponse struct {
	DetectorModelVersionSummaries []DetectorModelVersionSummary `json:"detectorModelVersionSummaries,omitempty"`
	NextToken                     *string                       `json:"nextToken,omitempty"`
}
