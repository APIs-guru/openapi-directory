package shared

// PrivateDNSNameConfiguration
// Information about the private DNS name for the service endpoint. For more information about these parameters, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html">VPC Endpoint Service Private DNS Name Verification</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
type PrivateDNSNameConfiguration struct {
	Name  *string
	State *DNSNameStateEnum
	Type  *string
	Value *string
}
