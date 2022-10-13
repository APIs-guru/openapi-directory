package shared

type DescribeConnectorsResponse struct {
	ConnectorConfigurations map[string]ConnectorConfiguration `json:"connectorConfigurations"`
	NextToken               *string                           `json:"nextToken"`
}
