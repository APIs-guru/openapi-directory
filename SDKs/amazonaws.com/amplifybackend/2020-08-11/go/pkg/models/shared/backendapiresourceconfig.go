package shared

type BackendAPIResourceConfig struct {
	AdditionalAuthTypes []BackendAPIAuthType          `json:"AdditionalAuthTypes"`
	APIName             *string                       `json:"ApiName"`
	ConflictResolution  *BackendAPIConflictResolution `json:"ConflictResolution"`
	DefaultAuthType     *BackendAPIAuthType           `json:"DefaultAuthType"`
	Service             *string                       `json:"Service"`
	TransformSchema     *string                       `json:"TransformSchema"`
}
