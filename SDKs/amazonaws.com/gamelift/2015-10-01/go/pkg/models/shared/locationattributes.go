package shared



type LocationAttributes struct {
    LocationState *LocationState `json:"LocationState,omitempty"`
    StoppedActions []FleetActionEnum `json:"StoppedActions,omitempty"`
    UpdateStatus *LocationUpdateStatusEnum `json:"UpdateStatus,omitempty"`
    
}

