package shared

// ListDevicesResult
// Represents the result of a list devices operation.
type ListDevicesResult struct {
	Devices   []Device `json:"devices,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
