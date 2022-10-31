package shared



type CreateDatasetGroupRequest struct {
    DatasetArns []string `json:"DatasetArns,omitempty"`
    DatasetGroupName string `json:"DatasetGroupName"`
    Domain DomainEnum `json:"Domain"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

