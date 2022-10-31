package shared



type ListDetectorModelsResponse struct {
    DetectorModelSummaries []DetectorModelSummary `json:"detectorModelSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

