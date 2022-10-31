package shared

type ListResourceServersResponse struct {
	NextToken       *string              `json:"NextToken,omitempty"`
	ResourceServers []ResourceServerType `json:"ResourceServers"`
}
