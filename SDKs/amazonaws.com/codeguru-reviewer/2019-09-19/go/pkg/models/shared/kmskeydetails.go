package shared

// KmsKeyDetails
// <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
type KmsKeyDetails struct {
	EncryptionOption *EncryptionOptionEnum `json:"EncryptionOption,omitempty"`
	KmsKeyID         *string               `json:"KMSKeyId,omitempty"`
}
