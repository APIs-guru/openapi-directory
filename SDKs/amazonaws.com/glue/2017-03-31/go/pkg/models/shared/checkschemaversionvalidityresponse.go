package shared

type CheckSchemaVersionValidityResponse struct {
	Error *string `json:"Error"`
	Valid *bool   `json:"Valid"`
}
