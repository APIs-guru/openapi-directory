package shared



type DescribeDomainControllersRequest struct {
    DirectoryID string `json:"DirectoryId"`
    DomainControllerIds []string `json:"DomainControllerIds,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

