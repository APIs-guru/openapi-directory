package shared

type DescribeVolumeAttributeResult struct {
	AutoEnableIo *AttributeBooleanValue
	ProductCodes []ProductCode
	VolumeID     *string
}
