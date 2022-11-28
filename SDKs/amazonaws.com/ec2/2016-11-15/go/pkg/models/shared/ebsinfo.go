package shared

// EbsInfo
// Describes the Amazon EBS features supported by the instance type.
type EbsInfo struct {
	EbsOptimizedInfo    *EbsOptimizedInfo
	EbsOptimizedSupport *EbsOptimizedSupportEnum
	EncryptionSupport   *EbsEncryptionSupportEnum
	NvmeSupport         *EbsNvmeSupportEnum
}
