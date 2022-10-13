package shared

type StartImageBuilderRequest struct {
	AppstreamAgentVersion *string `json:"AppstreamAgentVersion"`
	Name                  string  `json:"Name"`
}
