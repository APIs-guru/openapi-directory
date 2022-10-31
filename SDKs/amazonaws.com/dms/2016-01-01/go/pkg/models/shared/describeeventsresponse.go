package shared

type DescribeEventsResponse struct {
	Events []Event `json:"Events,omitempty"`
	Marker *string `json:"Marker,omitempty"`
}
