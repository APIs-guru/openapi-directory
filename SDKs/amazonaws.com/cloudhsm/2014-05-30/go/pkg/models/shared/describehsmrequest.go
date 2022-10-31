package shared

type DescribeHsmRequest struct {
	HsmArn          *string `json:"HsmArn,omitempty"`
	HsmSerialNumber *string `json:"HsmSerialNumber,omitempty"`
}
