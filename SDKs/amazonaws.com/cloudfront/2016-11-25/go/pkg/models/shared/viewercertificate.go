package shared

// ViewerCertificate
// <p>A complex type that specifies the following:</p> <ul> <li> <p>Which SSL/TLS certificate to use when viewers request objects using HTTPS</p> </li> <li> <p>Whether you want CloudFront to use dedicated IP addresses or SNI when you're using alternate domain names in your object names</p> </li> <li> <p>The minimum protocol version that you want CloudFront to use when communicating with viewers</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your Objects</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p>
type ViewerCertificate struct {
	AcmCertificateArn            *string
	Certificate                  *string
	CertificateSource            *CertificateSourceEnum
	CloudFrontDefaultCertificate *bool
	IamCertificateID             *string
	MinimumProtocolVersion       *MinimumProtocolVersionEnum
	SslSupportMethod             *SslSupportMethodEnum
}
