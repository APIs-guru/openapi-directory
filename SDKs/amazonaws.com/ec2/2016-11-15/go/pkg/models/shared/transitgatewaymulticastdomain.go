package shared

import (
	"time"
)

// TransitGatewayMulticastDomain
// Describes the transit gateway multicast domain.
type TransitGatewayMulticastDomain struct {
	CreationTime                     *time.Time
	Options                          *TransitGatewayMulticastDomainOptions
	OwnerID                          *string
	State                            *TransitGatewayMulticastDomainStateEnum
	Tags                             []Tag
	TransitGatewayID                 *string
	TransitGatewayMulticastDomainArn *string
	TransitGatewayMulticastDomainID  *string
}
