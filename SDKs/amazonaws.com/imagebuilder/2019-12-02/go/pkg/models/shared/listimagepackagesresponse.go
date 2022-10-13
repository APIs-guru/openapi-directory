package shared

type ListImagePackagesResponse struct {
	ImagePackageList []ImagePackage `json:"imagePackageList"`
	NextToken        *string        `json:"nextToken"`
	RequestID        *string        `json:"requestId"`
}
