package shared

type EncryptionConfiguration struct {
	CmkArn    *string `json:"CmkArn"`
	Encrypted bool    `json:"Encrypted"`
}
