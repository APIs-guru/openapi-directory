package shared

type EndpointConfiguration struct {
	ClientIPPreservationEnabled *bool   `json:"ClientIPPreservationEnabled"`
	EndpointID                  *string `json:"EndpointId"`
	Weight                      *int64  `json:"Weight"`
}
