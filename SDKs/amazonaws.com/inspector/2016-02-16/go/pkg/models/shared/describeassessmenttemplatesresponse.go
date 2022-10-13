package shared

type DescribeAssessmentTemplatesResponse struct {
	AssessmentTemplates []AssessmentTemplate         `json:"assessmentTemplates"`
	FailedItems         map[string]FailedItemDetails `json:"failedItems"`
}
