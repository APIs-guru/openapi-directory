package shared

import (
	"time"
)

type Credentials struct {
	AccessKeyID  *string    `json:"AccessKeyId"`
	Expiration   *time.Time `json:"Expiration"`
	SecretKey    *string    `json:"SecretKey"`
	SessionToken *string    `json:"SessionToken"`
}
