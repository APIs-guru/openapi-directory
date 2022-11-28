package shared

import (
	"time"
)

// NetworkInsightsPath
// Describes a path.
type NetworkInsightsPath struct {
	CreatedDate            *time.Time
	Destination            *string
	DestinationIP          *string
	DestinationPort        *int64
	NetworkInsightsPathArn *string
	NetworkInsightsPathID  *string
	Protocol               *ProtocolEnum
	Source                 *string
	SourceIP               *string
	Tags                   []Tag
}
