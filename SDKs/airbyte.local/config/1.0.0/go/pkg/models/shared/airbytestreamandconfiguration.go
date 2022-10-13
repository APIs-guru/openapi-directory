package shared

type AirbyteStreamAndConfiguration struct {
	Config *AirbyteStreamConfiguration `json:"config"`
	Stream *AirbyteStream              `json:"stream"`
}
