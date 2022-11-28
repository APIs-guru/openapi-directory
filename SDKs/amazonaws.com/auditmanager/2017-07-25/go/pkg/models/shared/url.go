package shared

// URL
//
//	A uniform resource locator, used as a unique identifier to locate a resource on the internet.
type URL struct {
	HyperlinkName *string `json:"hyperlinkName,omitempty"`
	Link          *string `json:"link,omitempty"`
}
