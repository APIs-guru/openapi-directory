package shared

// StartSigningJobParameter
// Information required to start a signing job.
type StartSigningJobParameter struct {
	Destination             *Destination             `json:"destination,omitempty"`
	SigningProfileName      *string                  `json:"signingProfileName,omitempty"`
	SigningProfileParameter *SigningProfileParameter `json:"signingProfileParameter,omitempty"`
}
