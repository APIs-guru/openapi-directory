package shared



type GetResourceCollectionResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ResourceCollection *ResourceCollectionFilter `json:"ResourceCollection,omitempty"`
    
}

