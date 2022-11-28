package shared

type SearchTransitGatewayRoutesResult struct {
	AdditionalRoutesAvailable *bool
	Routes                    []TransitGatewayRoute
}
