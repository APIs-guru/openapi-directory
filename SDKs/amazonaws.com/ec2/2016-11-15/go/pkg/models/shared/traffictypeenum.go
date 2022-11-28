package shared

type TrafficTypeEnum string

const (
	TrafficTypeEnumAccept TrafficTypeEnum = "ACCEPT"
	TrafficTypeEnumReject TrafficTypeEnum = "REJECT"
	TrafficTypeEnumAll    TrafficTypeEnum = "ALL"
)
