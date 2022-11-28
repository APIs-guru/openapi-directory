package shared

// LoggerDefinitionVersion
// Information about a logger definition version.
type LoggerDefinitionVersion struct {
	Loggers []Logger `json:"Loggers,omitempty"`
}
