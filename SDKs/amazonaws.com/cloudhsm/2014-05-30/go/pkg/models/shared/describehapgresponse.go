package shared

// DescribeHapgResponse
// Contains the output of the <a>DescribeHapg</a> action.
type DescribeHapgResponse struct {
	HapgArn                 *string                  `json:"HapgArn,omitempty"`
	HapgSerial              *string                  `json:"HapgSerial,omitempty"`
	HsmsLastActionFailed    []string                 `json:"HsmsLastActionFailed,omitempty"`
	HsmsPendingDeletion     []string                 `json:"HsmsPendingDeletion,omitempty"`
	HsmsPendingRegistration []string                 `json:"HsmsPendingRegistration,omitempty"`
	Label                   *string                  `json:"Label,omitempty"`
	LastModifiedTimestamp   *string                  `json:"LastModifiedTimestamp,omitempty"`
	PartitionSerialList     []string                 `json:"PartitionSerialList,omitempty"`
	State                   *CloudHsmObjectStateEnum `json:"State,omitempty"`
}
