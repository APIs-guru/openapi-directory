package shared



type ListAlarmModelsResponse struct {
    AlarmModelSummaries []AlarmModelSummary `json:"alarmModelSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

