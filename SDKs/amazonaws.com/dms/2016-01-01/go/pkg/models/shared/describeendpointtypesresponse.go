package shared

type DescribeEndpointTypesResponse struct {
	Marker                 *string                 `json:"Marker"`
	SupportedEndpointTypes []SupportedEndpointType `json:"SupportedEndpointTypes"`
}
