package shared

// EnableSsoRequest
// Contains the inputs for the <a>EnableSso</a> operation.
type EnableSsoRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Password    *string `json:"Password,omitempty"`
	UserName    *string `json:"UserName,omitempty"`
}
