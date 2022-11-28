package shared

// VpcConfiguration
// The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>.
type VpcConfiguration struct {
	VpcID string `json:"vpcId"`
}
