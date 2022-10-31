package shared

type DescribeFleetLocationAttributesOutput struct {
	FleetArn           *string              `json:"FleetArn,omitempty"`
	FleetID            *string              `json:"FleetId,omitempty"`
	LocationAttributes []LocationAttributes `json:"LocationAttributes,omitempty"`
	NextToken          *string              `json:"NextToken,omitempty"`
}
