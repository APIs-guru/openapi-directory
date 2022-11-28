package shared

// HTTPHeaderConditionConfig
// <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
type HTTPHeaderConditionConfig struct {
	HTTPHeaderName *string
	Values         []string
}
