package shared

type Encryption struct {
	InitializationVector *string `json:"InitializationVector"`
	Key                  *string `json:"Key"`
	KeyMd5               *string `json:"KeyMd5"`
	Mode                 *string `json:"Mode"`
}
