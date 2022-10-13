package shared

type ListAlarmModelsResponse struct {
	AlarmModelSummaries []AlarmModelSummary `json:"alarmModelSummaries"`
	NextToken           *string             `json:"nextToken"`
}
