package shared

type HTTPQueryParameter struct {
	Match *QueryParameterMatch `json:"match"`
	Name  string               `json:"name"`
}
