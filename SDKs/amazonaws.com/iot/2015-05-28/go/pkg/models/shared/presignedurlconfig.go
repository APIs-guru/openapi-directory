package shared

type PresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec"`
	RoleArn      *string `json:"roleArn"`
}
