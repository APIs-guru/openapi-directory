package shared

type LocationAttributes struct {
	LocationState  *LocationState            `json:"LocationState"`
	StoppedActions []FleetActionEnum         `json:"StoppedActions"`
	UpdateStatus   *LocationUpdateStatusEnum `json:"UpdateStatus"`
}
