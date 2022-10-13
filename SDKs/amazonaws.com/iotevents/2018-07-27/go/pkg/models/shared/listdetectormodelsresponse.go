package shared

type ListDetectorModelsResponse struct {
	DetectorModelSummaries []DetectorModelSummary `json:"detectorModelSummaries"`
	NextToken              *string                `json:"nextToken"`
}
