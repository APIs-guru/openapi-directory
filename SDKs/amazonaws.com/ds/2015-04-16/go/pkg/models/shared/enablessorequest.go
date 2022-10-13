package shared

type EnableSsoRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Password    *string `json:"Password"`
	UserName    *string `json:"UserName"`
}
