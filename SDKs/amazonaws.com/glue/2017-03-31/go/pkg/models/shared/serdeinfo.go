package shared

type SerDeInfo struct {
	Name                 *string           `json:"Name"`
	Parameters           map[string]string `json:"Parameters"`
	SerializationLibrary *string           `json:"SerializationLibrary"`
}
