package shared

type DomainEnum string

const (
	DomainEnumRetail            DomainEnum = "RETAIL"
	DomainEnumCustom            DomainEnum = "CUSTOM"
	DomainEnumInventoryPlanning DomainEnum = "INVENTORY_PLANNING"
	DomainEnumEc2Capacity       DomainEnum = "EC2_CAPACITY"
	DomainEnumWorkForce         DomainEnum = "WORK_FORCE"
	DomainEnumWebTraffic        DomainEnum = "WEB_TRAFFIC"
	DomainEnumMetrics           DomainEnum = "METRICS"
)
