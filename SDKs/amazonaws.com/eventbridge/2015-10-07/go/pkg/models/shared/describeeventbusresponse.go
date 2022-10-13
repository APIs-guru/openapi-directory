package shared

type DescribeEventBusResponse struct {
	Arn    *string `json:"Arn"`
	Name   *string `json:"Name"`
	Policy *string `json:"Policy"`
}
