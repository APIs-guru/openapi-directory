package shared

// InvalidRelativePath
// The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
type InvalidRelativePath struct {
	Message *string
}
