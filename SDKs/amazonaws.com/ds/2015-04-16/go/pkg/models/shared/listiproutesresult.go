package shared



type ListIPRoutesResult struct {
    IPRoutesInfo []IPRouteInfo `json:"IpRoutesInfo,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

