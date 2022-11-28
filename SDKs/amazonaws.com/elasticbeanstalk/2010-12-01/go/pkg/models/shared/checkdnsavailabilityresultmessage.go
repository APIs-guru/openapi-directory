package shared

// CheckDNSAvailabilityResultMessage
// Indicates if the specified CNAME is available.
type CheckDNSAvailabilityResultMessage struct {
	Available           *bool
	FullyQualifiedCname *string
}
