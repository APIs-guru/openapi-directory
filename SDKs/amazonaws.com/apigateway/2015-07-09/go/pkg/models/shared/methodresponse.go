package shared

type MethodResponse struct {
	ResponseModels     map[string]string `json:"responseModels"`
	ResponseParameters map[string]bool   `json:"responseParameters"`
	StatusCode         *string           `json:"statusCode"`
}
