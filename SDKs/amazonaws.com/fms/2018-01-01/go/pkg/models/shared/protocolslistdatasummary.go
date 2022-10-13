package shared

type ProtocolsListDataSummary struct {
	ListArn       *string  `json:"ListArn"`
	ListID        *string  `json:"ListId"`
	ListName      *string  `json:"ListName"`
	ProtocolsList []string `json:"ProtocolsList"`
}
