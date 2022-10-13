package shared

type SecurityGroupRuleDescription struct {
	FromPort     *int64  `json:"FromPort"`
	Ipv4Range    *string `json:"IPV4Range"`
	Ipv6Range    *string `json:"IPV6Range"`
	PrefixListID *string `json:"PrefixListId"`
	Protocol     *string `json:"Protocol"`
	ToPort       *int64  `json:"ToPort"`
}
