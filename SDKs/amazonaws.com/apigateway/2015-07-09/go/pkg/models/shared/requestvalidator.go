package shared

type RequestValidator struct {
	ID                        *string `json:"id"`
	Name                      *string `json:"name"`
	ValidateRequestBody       *bool   `json:"validateRequestBody"`
	ValidateRequestParameters *bool   `json:"validateRequestParameters"`
}
