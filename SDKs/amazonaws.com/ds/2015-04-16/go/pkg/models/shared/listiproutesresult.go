package shared

type ListIPRoutesResult struct {
	IPRoutesInfo []IPRouteInfo `json:"IpRoutesInfo"`
	NextToken    *string       `json:"NextToken"`
}
