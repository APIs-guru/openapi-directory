package shared

type AddProfileKeyResponse struct {
	KeyName *string  `json:"KeyName"`
	Values  []string `json:"Values"`
}
