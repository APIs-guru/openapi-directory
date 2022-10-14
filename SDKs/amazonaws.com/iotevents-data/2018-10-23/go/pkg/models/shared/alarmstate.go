package shared

type AlarmState struct {
	CustomerAction *CustomerAction     `json:"customerAction,omitempty"`
	RuleEvaluation *RuleEvaluation     `json:"ruleEvaluation,omitempty"`
	StateName      *AlarmStateNameEnum `json:"stateName,omitempty"`
	SystemEvent    *SystemEvent        `json:"systemEvent,omitempty"`
}
