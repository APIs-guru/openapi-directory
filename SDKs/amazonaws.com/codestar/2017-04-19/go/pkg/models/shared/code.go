package shared

// Code
// Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
type Code struct {
	Destination CodeDestination `json:"destination"`
	Source      CodeSource      `json:"source"`
}
