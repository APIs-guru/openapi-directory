package shared

// PathComponent
// Describes a path component.
type PathComponent struct {
	ACLRule           *AnalysisACLRule
	Component         *AnalysisComponent
	DestinationVpc    *AnalysisComponent
	InboundHeader     *AnalysisPacketHeader
	OutboundHeader    *AnalysisPacketHeader
	RouteTableRoute   *AnalysisRouteTableRoute
	SecurityGroupRule *AnalysisSecurityGroupRule
	SequenceNumber    *int64
	SourceVpc         *AnalysisComponent
	Subnet            *AnalysisComponent
	Vpc               *AnalysisComponent
}
