package shared

// TooManyPublicKeys
// The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.
type TooManyPublicKeys struct {
	Message *string
}
