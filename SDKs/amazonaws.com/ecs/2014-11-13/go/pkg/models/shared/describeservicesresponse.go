package shared

type DescribeServicesResponse struct {
	Failures []Failure `json:"failures,omitempty"`
	Services []Service `json:"services,omitempty"`
}
