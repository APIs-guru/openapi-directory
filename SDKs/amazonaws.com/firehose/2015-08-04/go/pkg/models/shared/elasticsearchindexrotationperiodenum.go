package shared

type ElasticsearchIndexRotationPeriodEnum string

const (
	ElasticsearchIndexRotationPeriodEnumNoRotation ElasticsearchIndexRotationPeriodEnum = "NoRotation"
	ElasticsearchIndexRotationPeriodEnumOneHour    ElasticsearchIndexRotationPeriodEnum = "OneHour"
	ElasticsearchIndexRotationPeriodEnumOneDay     ElasticsearchIndexRotationPeriodEnum = "OneDay"
	ElasticsearchIndexRotationPeriodEnumOneWeek    ElasticsearchIndexRotationPeriodEnum = "OneWeek"
	ElasticsearchIndexRotationPeriodEnumOneMonth   ElasticsearchIndexRotationPeriodEnum = "OneMonth"
)
