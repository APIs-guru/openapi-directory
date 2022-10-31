package shared



type AssessmentFramework struct {
    Arn *string `json:"arn,omitempty"`
    ControlSets []AssessmentControlSet `json:"controlSets,omitempty"`
    ID *string `json:"id,omitempty"`
    Metadata *FrameworkMetadata `json:"metadata,omitempty"`
    
}

