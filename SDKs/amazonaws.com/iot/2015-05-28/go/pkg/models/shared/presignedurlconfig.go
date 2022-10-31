package shared



type PresignedURLConfig struct {
    ExpiresInSec *int64 `json:"expiresInSec,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

