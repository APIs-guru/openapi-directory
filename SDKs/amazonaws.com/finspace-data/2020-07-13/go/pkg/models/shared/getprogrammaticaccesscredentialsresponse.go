package shared

type GetProgrammaticAccessCredentialsResponse struct {
	Credentials       *Credentials `json:"credentials"`
	DurationInMinutes *int64       `json:"durationInMinutes"`
}
