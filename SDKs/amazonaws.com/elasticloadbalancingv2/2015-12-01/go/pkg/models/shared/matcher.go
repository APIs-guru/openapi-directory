package shared

// Matcher
// The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
type Matcher struct {
	GrpcCode *string
	HTTPCode *string
}
