package shared

// AnalysisPacketHeader
// Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
type AnalysisPacketHeader struct {
	DestinationAddresses  []string
	DestinationPortRanges []PortRange
	Protocol              *string
	SourceAddresses       []string
	SourcePortRanges      []PortRange
}
