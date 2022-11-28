package shared

// DbClusterParameterGroupsMessage
// Represents the output of <a>DBClusterParameterGroups</a>.
type DbClusterParameterGroupsMessage struct {
	DbClusterParameterGroups []DbClusterParameterGroup
	Marker                   *string
}
