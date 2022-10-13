package shared

type ListAPIDestinationsRequest struct {
	ConnectionArn *string `json:"ConnectionArn"`
	Limit         *int64  `json:"Limit"`
	NamePrefix    *string `json:"NamePrefix"`
	NextToken     *string `json:"NextToken"`
}
