package shared

type DescribeDomainControllersRequest struct {
	DirectoryID         string   `json:"DirectoryId"`
	DomainControllerIds []string `json:"DomainControllerIds"`
	Limit               *int64   `json:"Limit"`
	NextToken           *string  `json:"NextToken"`
}
