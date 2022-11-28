package shared

// ListTagsForVaultOutput
// Contains the Amazon S3 Glacier response to your request.
type ListTagsForVaultOutput struct {
	Tags map[string]string `json:"Tags,omitempty"`
}
