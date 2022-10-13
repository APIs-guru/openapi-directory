package shared

type DescribeEventsResponse struct {
	Events []Event `json:"Events"`
	Marker *string `json:"Marker"`
}
