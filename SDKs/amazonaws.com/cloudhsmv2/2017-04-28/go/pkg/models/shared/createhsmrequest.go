package shared

type CreateHsmRequest struct {
	AvailabilityZone string  `json:"AvailabilityZone"`
	ClusterID        string  `json:"ClusterId"`
	IPAddress        *string `json:"IpAddress,omitempty"`
}
