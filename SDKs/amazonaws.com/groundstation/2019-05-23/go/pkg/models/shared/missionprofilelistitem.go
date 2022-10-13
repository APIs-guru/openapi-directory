package shared

type MissionProfileListItem struct {
	MissionProfileArn *string `json:"missionProfileArn"`
	MissionProfileID  *string `json:"missionProfileId"`
	Name              *string `json:"name"`
	Region            *string `json:"region"`
}
