package shared



type StartAssessmentRunRequest struct {
    AssessmentRunName *string `json:"assessmentRunName,omitempty"`
    AssessmentTemplateArn string `json:"assessmentTemplateArn"`
    
}

