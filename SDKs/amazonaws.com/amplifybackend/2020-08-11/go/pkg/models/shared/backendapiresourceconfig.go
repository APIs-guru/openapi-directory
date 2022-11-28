package shared

// BackendAPIResourceConfig
// The resource config for the data model, configured as a part of the Amplify project.
type BackendAPIResourceConfig struct {
	AdditionalAuthTypes []BackendAPIAuthType          `json:"AdditionalAuthTypes,omitempty"`
	APIName             *string                       `json:"ApiName,omitempty"`
	ConflictResolution  *BackendAPIConflictResolution `json:"ConflictResolution,omitempty"`
	DefaultAuthType     *BackendAPIAuthType           `json:"DefaultAuthType,omitempty"`
	Service             *string                       `json:"Service,omitempty"`
	TransformSchema     *string                       `json:"TransformSchema,omitempty"`
}
