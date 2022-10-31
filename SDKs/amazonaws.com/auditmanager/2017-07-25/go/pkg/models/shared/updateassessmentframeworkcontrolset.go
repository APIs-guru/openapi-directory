package shared



type UpdateAssessmentFrameworkControlSet struct {
    Controls []CreateAssessmentFrameworkControl `json:"controls,omitempty"`
    ID *string `json:"id,omitempty"`
    Name string `json:"name"`
    
}

