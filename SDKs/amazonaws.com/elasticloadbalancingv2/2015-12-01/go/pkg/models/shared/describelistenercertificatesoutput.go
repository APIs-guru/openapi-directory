package shared

type DescribeListenerCertificatesOutput struct {
	Certificates []Certificate
	NextMarker   *string
}
