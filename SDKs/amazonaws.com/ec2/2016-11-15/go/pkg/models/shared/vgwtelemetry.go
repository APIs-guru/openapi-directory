package shared

import (
	"time"
)

// VgwTelemetry
// Describes telemetry for a VPN tunnel.
type VgwTelemetry struct {
	AcceptedRouteCount *int64
	CertificateArn     *string
	LastStatusChange   *time.Time
	OutsideIPAddress   *string
	Status             *TelemetryStatusEnum
	StatusMessage      *string
}
