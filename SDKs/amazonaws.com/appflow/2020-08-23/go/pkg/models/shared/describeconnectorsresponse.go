package shared

type DescribeConnectorsResponse struct {
	ConnectorConfigurations map[string]ConnectorConfiguration `json:"connectorConfigurations,omitempty"`
	NextToken               *string                           `json:"nextToken,omitempty"`
}
