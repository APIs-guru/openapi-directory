package shared

type BatchDeleteTableVersionResponse struct {
	Errors []TableVersionError `json:"Errors,omitempty"`
}
