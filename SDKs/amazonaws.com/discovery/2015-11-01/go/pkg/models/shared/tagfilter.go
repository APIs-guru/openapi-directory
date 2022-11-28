package shared

// TagFilter
// The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
type TagFilter struct {
	Name   string   `json:"name"`
	Values []string `json:"values"`
}
