package shared

type ListGameServersOutput struct {
	GameServers []GameServer `json:"GameServers"`
	NextToken   *string      `json:"NextToken"`
}
