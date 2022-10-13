package shared

type DescribeServicesResponse struct {
	Failures []Failure `json:"failures"`
	Services []Service `json:"services"`
}
