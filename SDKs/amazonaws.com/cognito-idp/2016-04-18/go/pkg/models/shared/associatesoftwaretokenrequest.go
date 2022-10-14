package shared

type AssociateSoftwareTokenRequest struct {
	AccessToken *string `json:"AccessToken,omitempty"`
	Session     *string `json:"Session,omitempty"`
}
