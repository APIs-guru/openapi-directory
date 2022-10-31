package shared



type ApplicationSource struct {
    CloudFormationStackArn *string `json:"CloudFormationStackARN,omitempty"`
    TagFilters []TagFilter `json:"TagFilters,omitempty"`
    
}

