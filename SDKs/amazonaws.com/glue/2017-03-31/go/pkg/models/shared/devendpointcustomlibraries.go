package shared

type DevEndpointCustomLibraries struct {
	ExtraJarsS3Path       *string `json:"ExtraJarsS3Path,omitempty"`
	ExtraPythonLibsS3Path *string `json:"ExtraPythonLibsS3Path,omitempty"`
}
