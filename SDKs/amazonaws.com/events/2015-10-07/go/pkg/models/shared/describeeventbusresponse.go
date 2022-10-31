package shared

type DescribeEventBusResponse struct {
	Arn    *string `json:"Arn,omitempty"`
	Name   *string `json:"Name,omitempty"`
	Policy *string `json:"Policy,omitempty"`
}
