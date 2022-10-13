package shared

type UpdateNumberOfDomainControllersRequest struct {
	DesiredNumber int64  `json:"DesiredNumber"`
	DirectoryID   string `json:"DirectoryId"`
}
