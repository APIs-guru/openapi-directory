package shared




type TrafficRoutingTypeEnum string

const (
    TrafficRoutingTypeEnumTimeBasedCanary TrafficRoutingTypeEnum = "TimeBasedCanary"
TrafficRoutingTypeEnumTimeBasedLinear TrafficRoutingTypeEnum = "TimeBasedLinear"
TrafficRoutingTypeEnumAllAtOnce TrafficRoutingTypeEnum = "AllAtOnce"
)


