package shared

type ListResourceServersResponse struct {
	NextToken       *string              `json:"NextToken"`
	ResourceServers []ResourceServerType `json:"ResourceServers"`
}
