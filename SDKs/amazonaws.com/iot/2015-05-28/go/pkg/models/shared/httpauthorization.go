package shared

type HTTPAuthorization struct {
	Sigv4 *SigV4Authorization `json:"sigv4,omitempty"`
}
