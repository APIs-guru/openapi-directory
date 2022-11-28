package shared

// TargetHealthDescription
// Information about the health of a target.
type TargetHealthDescription struct {
	HealthCheckPort *string
	Target          *TargetDescription
	TargetHealth    *TargetHealth
}
