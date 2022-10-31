package shared



type ChannelActivity struct {
    ChannelName string `json:"channelName"`
    Name string `json:"name"`
    Next *string `json:"next,omitempty"`
    
}

