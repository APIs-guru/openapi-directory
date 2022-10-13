package shared

type DescribeConnectorProfilesResponse struct {
	ConnectorProfileDetails []ConnectorProfile `json:"connectorProfileDetails"`
	NextToken               *string            `json:"nextToken"`
}
