package shared

type EndpointDescription struct {
	ClientIPPreservationEnabled *bool            `json:"ClientIPPreservationEnabled"`
	EndpointID                  *string          `json:"EndpointId"`
	HealthReason                *string          `json:"HealthReason"`
	HealthState                 *HealthStateEnum `json:"HealthState"`
	Weight                      *int64           `json:"Weight"`
}
