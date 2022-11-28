package shared

// Group
// A group object, which contains a specified group’s metadata and attributes.
type Group struct {
	DisplayName string `json:"DisplayName"`
	GroupID     string `json:"GroupId"`
}
