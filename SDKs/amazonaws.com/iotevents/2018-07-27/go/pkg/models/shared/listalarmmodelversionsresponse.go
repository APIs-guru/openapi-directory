package shared

type ListAlarmModelVersionsResponse struct {
	AlarmModelVersionSummaries []AlarmModelVersionSummary `json:"alarmModelVersionSummaries"`
	NextToken                  *string                    `json:"nextToken"`
}
