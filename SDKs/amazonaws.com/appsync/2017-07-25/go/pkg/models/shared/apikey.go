package shared

type APIKey struct {
	Deletes     *int64  `json:"deletes,omitempty"`
	Description *string `json:"description,omitempty"`
	Expires     *int64  `json:"expires,omitempty"`
	ID          *string `json:"id,omitempty"`
}
