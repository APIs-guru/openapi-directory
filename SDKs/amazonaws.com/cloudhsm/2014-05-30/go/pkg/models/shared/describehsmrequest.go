package shared

// DescribeHsmRequest
// Contains the inputs for the <a>DescribeHsm</a> operation.
type DescribeHsmRequest struct {
	HsmArn          *string `json:"HsmArn,omitempty"`
	HsmSerialNumber *string `json:"HsmSerialNumber,omitempty"`
}
