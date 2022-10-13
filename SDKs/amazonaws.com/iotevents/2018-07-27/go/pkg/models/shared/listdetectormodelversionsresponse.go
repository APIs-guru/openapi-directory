package shared

type ListDetectorModelVersionsResponse struct {
	DetectorModelVersionSummaries []DetectorModelVersionSummary `json:"detectorModelVersionSummaries"`
	NextToken                     *string                       `json:"nextToken"`
}
