package shared

type HTTPPathMatch struct {
	Exact *string `json:"exact"`
	Regex *string `json:"regex"`
}
