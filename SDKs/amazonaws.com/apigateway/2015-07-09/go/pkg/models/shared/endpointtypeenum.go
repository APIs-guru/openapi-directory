package shared

type EndpointTypeEnum string

const (
	EndpointTypeEnumRegional EndpointTypeEnum = "REGIONAL"
	EndpointTypeEnumEdge     EndpointTypeEnum = "EDGE"
	EndpointTypeEnumPrivate  EndpointTypeEnum = "PRIVATE"
)
