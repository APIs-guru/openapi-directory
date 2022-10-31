package shared



type DescribeSubscribersForNotificationResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Subscribers []Subscriber `json:"Subscribers,omitempty"`
    
}

