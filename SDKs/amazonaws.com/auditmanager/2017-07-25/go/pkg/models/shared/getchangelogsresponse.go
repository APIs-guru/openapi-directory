package shared

type GetChangeLogsResponse struct {
	ChangeLogs []ChangeLog `json:"changeLogs"`
	NextToken  *string     `json:"nextToken"`
}
