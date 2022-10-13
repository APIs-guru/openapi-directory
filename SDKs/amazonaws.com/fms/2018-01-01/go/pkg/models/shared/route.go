package shared

type Route struct {
	Destination     *string              `json:"Destination"`
	DestinationType *DestinationTypeEnum `json:"DestinationType"`
	Target          *string              `json:"Target"`
	TargetType      *TargetTypeEnum      `json:"TargetType"`
}
