package shared

// DisableSsoRequest
// Contains the inputs for the <a>DisableSso</a> operation.
type DisableSsoRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Password    *string `json:"Password,omitempty"`
	UserName    *string `json:"UserName,omitempty"`
}
