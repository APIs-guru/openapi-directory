package shared

// DescribeEndpointTypesResponse
// <p/>
type DescribeEndpointTypesResponse struct {
	Marker                 *string                 `json:"Marker,omitempty"`
	SupportedEndpointTypes []SupportedEndpointType `json:"SupportedEndpointTypes,omitempty"`
}
