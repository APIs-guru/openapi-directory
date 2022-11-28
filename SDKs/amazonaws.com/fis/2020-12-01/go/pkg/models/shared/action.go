package shared

// Action
// Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">AWS FIS actions</a> in the <i>AWS Fault Injection Simulator User Guide</i>.
type Action struct {
	Description *string                    `json:"description,omitempty"`
	ID          *string                    `json:"id,omitempty"`
	Parameters  map[string]ActionParameter `json:"parameters,omitempty"`
	Tags        map[string]string          `json:"tags,omitempty"`
	Targets     map[string]ActionTarget    `json:"targets,omitempty"`
}
