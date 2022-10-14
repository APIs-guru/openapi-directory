package shared

type Encryption struct {
	InitializationVector *string `json:"InitializationVector,omitempty"`
	Key                  *string `json:"Key,omitempty"`
	KeyMd5               *string `json:"KeyMd5,omitempty"`
	Mode                 *string `json:"Mode,omitempty"`
}
