package shared

type CreateTestGridURLRequest struct {
	ExpiresInSeconds int64  `json:"expiresInSeconds"`
	ProjectArn       string `json:"projectArn"`
}
