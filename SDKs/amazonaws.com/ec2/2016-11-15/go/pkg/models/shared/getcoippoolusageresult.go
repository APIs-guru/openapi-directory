package shared

type GetCoipPoolUsageResult struct {
	CoipAddressUsages        []CoipAddressUsage
	CoipPoolID               *string
	LocalGatewayRouteTableID *string
}
