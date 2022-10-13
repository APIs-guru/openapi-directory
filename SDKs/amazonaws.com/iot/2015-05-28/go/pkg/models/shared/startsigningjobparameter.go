package shared

type StartSigningJobParameter struct {
	Destination             *Destination             `json:"destination"`
	SigningProfileName      *string                  `json:"signingProfileName"`
	SigningProfileParameter *SigningProfileParameter `json:"signingProfileParameter"`
}
