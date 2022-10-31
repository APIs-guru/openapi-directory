package shared



type ListImagePackagesResponse struct {
    ImagePackageList []ImagePackage `json:"imagePackageList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

