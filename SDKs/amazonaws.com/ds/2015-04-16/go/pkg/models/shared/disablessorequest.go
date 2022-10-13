package shared

type DisableSsoRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Password    *string `json:"Password"`
	UserName    *string `json:"UserName"`
}
