package shared

type ApplySchemaResponse struct {
	AppliedSchemaArn *string `json:"AppliedSchemaArn,omitempty"`
	DirectoryArn     *string `json:"DirectoryArn,omitempty"`
}
