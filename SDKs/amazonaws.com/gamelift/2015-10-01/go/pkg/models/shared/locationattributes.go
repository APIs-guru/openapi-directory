package shared

// LocationAttributes
// <p>Represents a location in a multi-location fleet.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetLocationAttributes</a> </p>
type LocationAttributes struct {
	LocationState  *LocationState            `json:"LocationState,omitempty"`
	StoppedActions []FleetActionEnum         `json:"StoppedActions,omitempty"`
	UpdateStatus   *LocationUpdateStatusEnum `json:"UpdateStatus,omitempty"`
}
