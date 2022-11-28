package shared

// RegistryID
// A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
type RegistryID struct {
	RegistryArn  *string `json:"RegistryArn,omitempty"`
	RegistryName *string `json:"RegistryName,omitempty"`
}
