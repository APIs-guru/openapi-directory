package shared

// MissingCustomsException
// One or more required customs parameters was missing from the manifest.
type MissingCustomsException struct {
	Message *string
}
