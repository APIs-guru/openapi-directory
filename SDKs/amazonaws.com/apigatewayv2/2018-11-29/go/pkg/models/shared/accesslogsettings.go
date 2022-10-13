package shared

type AccessLogSettings struct {
	DestinationArn *string `json:"DestinationArn"`
	Format         *string `json:"Format"`
}
