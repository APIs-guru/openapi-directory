package shared



type DescribeConnectorProfilesResponse struct {
    ConnectorProfileDetails []ConnectorProfile `json:"connectorProfileDetails,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

