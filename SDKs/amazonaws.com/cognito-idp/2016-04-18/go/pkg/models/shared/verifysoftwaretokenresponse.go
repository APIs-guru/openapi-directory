package shared

type VerifySoftwareTokenResponse struct {
	Session *string                              `json:"Session,omitempty"`
	Status  *VerifySoftwareTokenResponseTypeEnum `json:"Status,omitempty"`
}
