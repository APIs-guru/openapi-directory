package shared

// SDKResponse
// The binary blob response to <a>GetSdk</a>, which contains the generated SDK.
type SDKResponse struct {
	Body *string `json:"body,omitempty"`
}
