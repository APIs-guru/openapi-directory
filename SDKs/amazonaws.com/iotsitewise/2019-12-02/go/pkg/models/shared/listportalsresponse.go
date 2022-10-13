package shared

type ListPortalsResponse struct {
	NextToken       *string         `json:"nextToken"`
	PortalSummaries []PortalSummary `json:"portalSummaries"`
}
