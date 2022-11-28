package shared

// Resolution
// Represents the screen resolution of a device in height and width, expressed in pixels.
type Resolution struct {
	Height *int64 `json:"height,omitempty"`
	Width  *int64 `json:"width,omitempty"`
}
