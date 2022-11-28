package shared

// MissingManifestFieldException
// One or more required fields were missing from the manifest file. Please correct and resubmit.
type MissingManifestFieldException struct {
	Message *string
}
