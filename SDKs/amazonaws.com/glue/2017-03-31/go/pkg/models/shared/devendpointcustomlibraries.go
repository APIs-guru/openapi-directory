package shared

type DevEndpointCustomLibraries struct {
	ExtraJarsS3Path       *string `json:"ExtraJarsS3Path"`
	ExtraPythonLibsS3Path *string `json:"ExtraPythonLibsS3Path"`
}
