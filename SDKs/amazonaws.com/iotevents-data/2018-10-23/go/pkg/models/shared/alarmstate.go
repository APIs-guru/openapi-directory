package shared

type AlarmState struct {
	CustomerAction *CustomerAction     `json:"customerAction"`
	RuleEvaluation *RuleEvaluation     `json:"ruleEvaluation"`
	StateName      *AlarmStateNameEnum `json:"stateName"`
	SystemEvent    *SystemEvent        `json:"systemEvent"`
}
