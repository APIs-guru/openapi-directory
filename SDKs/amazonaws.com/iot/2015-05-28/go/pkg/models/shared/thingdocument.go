package shared

type ThingDocument struct {
	Attributes      map[string]string  `json:"attributes"`
	Connectivity    *ThingConnectivity `json:"connectivity"`
	Shadow          *string            `json:"shadow"`
	ThingGroupNames []string           `json:"thingGroupNames"`
	ThingID         *string            `json:"thingId"`
	ThingName       *string            `json:"thingName"`
	ThingTypeName   *string            `json:"thingTypeName"`
}
