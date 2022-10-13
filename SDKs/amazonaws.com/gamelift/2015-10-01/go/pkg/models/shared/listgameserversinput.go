package shared

type ListGameServersInput struct {
	GameServerGroupName string         `json:"GameServerGroupName"`
	Limit               *int64         `json:"Limit"`
	NextToken           *string        `json:"NextToken"`
	SortOrder           *SortOrderEnum `json:"SortOrder"`
}
