package shared

type APIKey struct {
	Deletes     *int64  `json:"deletes"`
	Description *string `json:"description"`
	Expires     *int64  `json:"expires"`
	ID          *string `json:"id"`
}
