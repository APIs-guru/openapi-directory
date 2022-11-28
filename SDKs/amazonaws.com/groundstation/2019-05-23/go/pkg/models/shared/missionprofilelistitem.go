package shared

// MissionProfileListItem
// Item in a list of mission profiles.
type MissionProfileListItem struct {
	MissionProfileArn *string `json:"missionProfileArn,omitempty"`
	MissionProfileID  *string `json:"missionProfileId,omitempty"`
	Name              *string `json:"name,omitempty"`
	Region            *string `json:"region,omitempty"`
}
