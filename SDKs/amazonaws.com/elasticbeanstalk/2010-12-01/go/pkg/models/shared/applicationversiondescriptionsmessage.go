package shared

// ApplicationVersionDescriptionsMessage
// Result message wrapping a list of application version descriptions.
type ApplicationVersionDescriptionsMessage struct {
	ApplicationVersions []ApplicationVersionDescription
	NextToken           *string
}
