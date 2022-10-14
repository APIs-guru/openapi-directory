package shared

type RequestValidator struct {
	ID                        *string `json:"id,omitempty"`
	Name                      *string `json:"name,omitempty"`
	ValidateRequestBody       *bool   `json:"validateRequestBody,omitempty"`
	ValidateRequestParameters *bool   `json:"validateRequestParameters,omitempty"`
}
