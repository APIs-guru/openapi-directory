package shared

type DescribeHsmRequest struct {
	HsmArn          *string `json:"HsmArn"`
	HsmSerialNumber *string `json:"HsmSerialNumber"`
}
