package shared

type DescribeFleetLocationAttributesOutput struct {
	FleetArn           *string              `json:"FleetArn"`
	FleetID            *string              `json:"FleetId"`
	LocationAttributes []LocationAttributes `json:"LocationAttributes"`
	NextToken          *string              `json:"NextToken"`
}
