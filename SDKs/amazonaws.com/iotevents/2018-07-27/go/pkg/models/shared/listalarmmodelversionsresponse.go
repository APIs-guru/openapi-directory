package shared



type ListAlarmModelVersionsResponse struct {
    AlarmModelVersionSummaries []AlarmModelVersionSummary `json:"alarmModelVersionSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

