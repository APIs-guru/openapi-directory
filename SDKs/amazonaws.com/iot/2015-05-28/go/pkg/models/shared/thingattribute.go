package shared

type ThingAttribute struct {
	Attributes    map[string]string `json:"attributes"`
	ThingArn      *string           `json:"thingArn"`
	ThingName     *string           `json:"thingName"`
	ThingTypeName *string           `json:"thingTypeName"`
	Version       *int64            `json:"version"`
}
