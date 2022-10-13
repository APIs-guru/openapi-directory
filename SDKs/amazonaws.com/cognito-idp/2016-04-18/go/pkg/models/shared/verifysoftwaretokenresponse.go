package shared

type VerifySoftwareTokenResponse struct {
	Session *string                              `json:"Session"`
	Status  *VerifySoftwareTokenResponseTypeEnum `json:"Status"`
}
