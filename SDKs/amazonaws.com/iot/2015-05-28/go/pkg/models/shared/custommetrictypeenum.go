package shared

type CustomMetricTypeEnum string

const (
	CustomMetricTypeEnumStringList    CustomMetricTypeEnum = "string-list"
	CustomMetricTypeEnumIPAddressList CustomMetricTypeEnum = "ip-address-list"
	CustomMetricTypeEnumNumberList    CustomMetricTypeEnum = "number-list"
	CustomMetricTypeEnumNumber        CustomMetricTypeEnum = "number"
)
