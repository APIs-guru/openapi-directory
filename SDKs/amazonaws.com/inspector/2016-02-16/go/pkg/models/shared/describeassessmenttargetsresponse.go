package shared



type DescribeAssessmentTargetsResponse struct {
    AssessmentTargets []AssessmentTarget `json:"assessmentTargets"`
    FailedItems map[string]FailedItemDetails `json:"failedItems"`
    
}

