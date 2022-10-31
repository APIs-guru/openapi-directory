package shared



type DescribeRegistriesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Registries []Registry `json:"registries"`
    
}

