package shared

// AirbyteCatalog
// describes the available schema (catalog).
type AirbyteCatalog struct {
	Streams []AirbyteStreamAndConfiguration `json:"streams"`
}
