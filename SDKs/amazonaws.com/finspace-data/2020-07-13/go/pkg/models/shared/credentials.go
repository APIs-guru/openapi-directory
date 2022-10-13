package shared

type Credentials struct {
	AccessKeyID     *string `json:"accessKeyId"`
	SecretAccessKey *string `json:"secretAccessKey"`
	SessionToken    *string `json:"sessionToken"`
}
