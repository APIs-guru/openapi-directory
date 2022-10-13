package shared

type AccessLogSettings struct {
	DestinationArn *string `json:"destinationArn"`
	Format         *string `json:"format"`
}
