package shared

type SearchLocalGatewayRoutesResult struct {
	NextToken *string
	Routes    []LocalGatewayRoute
}
