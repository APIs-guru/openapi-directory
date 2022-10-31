package shared

type ListHapgsResponse struct {
	HapgList  []string `json:"HapgList"`
	NextToken *string  `json:"NextToken,omitempty"`
}
