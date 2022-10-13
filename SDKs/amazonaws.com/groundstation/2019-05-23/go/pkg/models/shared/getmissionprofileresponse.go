package shared

type GetMissionProfileResponse struct {
	ContactPostPassDurationSeconds      *int64            `json:"contactPostPassDurationSeconds"`
	ContactPrePassDurationSeconds       *int64            `json:"contactPrePassDurationSeconds"`
	DataflowEdges                       [][]string        `json:"dataflowEdges"`
	MinimumViableContactDurationSeconds *int64            `json:"minimumViableContactDurationSeconds"`
	MissionProfileArn                   *string           `json:"missionProfileArn"`
	MissionProfileID                    *string           `json:"missionProfileId"`
	Name                                *string           `json:"name"`
	Region                              *string           `json:"region"`
	Tags                                map[string]string `json:"tags"`
	TrackingConfigArn                   *string           `json:"trackingConfigArn"`
}
