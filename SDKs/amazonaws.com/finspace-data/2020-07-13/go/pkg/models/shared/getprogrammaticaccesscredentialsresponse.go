package shared

type GetProgrammaticAccessCredentialsResponse struct {
	Credentials       *Credentials `json:"credentials,omitempty"`
	DurationInMinutes *int64       `json:"durationInMinutes,omitempty"`
}
