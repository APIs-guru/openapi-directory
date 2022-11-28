package shared

// LaunchTemplateInstanceMetadataOptions
// The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
type LaunchTemplateInstanceMetadataOptions struct {
	HTTPEndpoint            *LaunchTemplateInstanceMetadataEndpointStateEnum
	HTTPProtocolIpv6        *LaunchTemplateInstanceMetadataProtocolIpv6Enum
	HTTPPutResponseHopLimit *int64
	HTTPTokens              *LaunchTemplateHTTPTokensStateEnum
	State                   *LaunchTemplateInstanceMetadataOptionsStateEnum
}
