package shared



type GetMissionProfileResponse struct {
    ContactPostPassDurationSeconds *int64 `json:"contactPostPassDurationSeconds,omitempty"`
    ContactPrePassDurationSeconds *int64 `json:"contactPrePassDurationSeconds,omitempty"`
    DataflowEdges [][]string `json:"dataflowEdges,omitempty"`
    MinimumViableContactDurationSeconds *int64 `json:"minimumViableContactDurationSeconds,omitempty"`
    MissionProfileArn *string `json:"missionProfileArn,omitempty"`
    MissionProfileID *string `json:"missionProfileId,omitempty"`
    Name *string `json:"name,omitempty"`
    Region *string `json:"region,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TrackingConfigArn *string `json:"trackingConfigArn,omitempty"`
    
}

