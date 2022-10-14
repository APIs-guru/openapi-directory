package shared

type CreateEndpointRequest struct {
	ClientRequestToken    *string `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn     *string `json:"DataAccessRoleArn,omitempty"`
	DesiredInferenceUnits int64   `json:"DesiredInferenceUnits"`
	EndpointName          string  `json:"EndpointName"`
	ModelArn              string  `json:"ModelArn"`
	Tags                  []Tag   `json:"Tags,omitempty"`
}
