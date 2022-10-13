package shared

type LocationState struct {
	Location *string          `json:"Location"`
	Status   *FleetStatusEnum `json:"Status"`
}
