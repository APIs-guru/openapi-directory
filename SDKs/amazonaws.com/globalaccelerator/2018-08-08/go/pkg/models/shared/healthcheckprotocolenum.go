package shared

type HealthCheckProtocolEnum string

const (
	HealthCheckProtocolEnumTCP   HealthCheckProtocolEnum = "TCP"
	HealthCheckProtocolEnumHTTP  HealthCheckProtocolEnum = "HTTP"
	HealthCheckProtocolEnumHTTPS HealthCheckProtocolEnum = "HTTPS"
)
