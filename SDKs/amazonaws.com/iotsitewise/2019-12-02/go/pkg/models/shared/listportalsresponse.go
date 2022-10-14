package shared

type ListPortalsResponse struct {
	NextToken       *string         `json:"nextToken,omitempty"`
	PortalSummaries []PortalSummary `json:"portalSummaries,omitempty"`
}
