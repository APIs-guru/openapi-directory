package shared

type Application struct {
	AdditionalInfo map[string]string `json:"AdditionalInfo"`
	Args           []string          `json:"Args"`
	Name           *string           `json:"Name"`
	Version        *string           `json:"Version"`
}
