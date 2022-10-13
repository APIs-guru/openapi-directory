package shared

type CreateEndpointRequest struct {
	ClientRequestToken    *string `json:"ClientRequestToken"`
	DataAccessRoleArn     *string `json:"DataAccessRoleArn"`
	DesiredInferenceUnits int64   `json:"DesiredInferenceUnits"`
	EndpointName          string  `json:"EndpointName"`
	ModelArn              string  `json:"ModelArn"`
	Tags                  []Tag   `json:"Tags"`
}
