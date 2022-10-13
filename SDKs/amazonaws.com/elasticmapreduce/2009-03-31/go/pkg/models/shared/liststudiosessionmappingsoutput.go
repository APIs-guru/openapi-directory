package shared

type ListStudioSessionMappingsOutput struct {
	Marker          *string                 `json:"Marker"`
	SessionMappings []SessionMappingSummary `json:"SessionMappings"`
}
