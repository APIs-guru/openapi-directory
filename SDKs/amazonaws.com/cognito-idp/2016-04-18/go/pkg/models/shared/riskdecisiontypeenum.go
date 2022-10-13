package shared

type RiskDecisionTypeEnum string

const (
	RiskDecisionTypeEnumNoRisk          RiskDecisionTypeEnum = "NoRisk"
	RiskDecisionTypeEnumAccountTakeover RiskDecisionTypeEnum = "AccountTakeover"
	RiskDecisionTypeEnumBlock           RiskDecisionTypeEnum = "Block"
)
