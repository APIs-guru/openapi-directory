package shared

// ApplicationSource
// Represents an application source.
type ApplicationSource struct {
	CloudFormationStackArn *string     `json:"CloudFormationStackARN,omitempty"`
	TagFilters             []TagFilter `json:"TagFilters,omitempty"`
}
