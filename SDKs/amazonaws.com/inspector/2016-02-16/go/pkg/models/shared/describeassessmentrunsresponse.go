package shared



type DescribeAssessmentRunsResponse struct {
    AssessmentRuns []AssessmentRun `json:"assessmentRuns"`
    FailedItems map[string]FailedItemDetails `json:"failedItems"`
    
}

