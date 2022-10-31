package shared



type ProtocolsListDataSummary struct {
    ListArn *string `json:"ListArn,omitempty"`
    ListID *string `json:"ListId,omitempty"`
    ListName *string `json:"ListName,omitempty"`
    ProtocolsList []string `json:"ProtocolsList,omitempty"`
    
}

