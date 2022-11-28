package shared

// InstanceMetadataOptions
// The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
type InstanceMetadataOptions struct {
	HTTPEndpoint            *InstanceMetadataEndpointStateEnum
	HTTPPutResponseHopLimit *int64
	HTTPTokens              *InstanceMetadataHTTPTokensStateEnum
}
