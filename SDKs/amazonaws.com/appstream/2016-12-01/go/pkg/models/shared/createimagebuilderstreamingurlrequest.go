package shared

type CreateImageBuilderStreamingURLRequest struct {
	Name     string `json:"Name"`
	Validity *int64 `json:"Validity,omitempty"`
}
