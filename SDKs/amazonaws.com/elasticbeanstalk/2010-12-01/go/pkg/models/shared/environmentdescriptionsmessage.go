package shared

// EnvironmentDescriptionsMessage
// Result message containing a list of environment descriptions.
type EnvironmentDescriptionsMessage struct {
	Environments []EnvironmentDescription
	NextToken    *string
}
