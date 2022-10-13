package shared

type DescribeHapgResponse struct {
	HapgArn                 *string                  `json:"HapgArn"`
	HapgSerial              *string                  `json:"HapgSerial"`
	HsmsLastActionFailed    []string                 `json:"HsmsLastActionFailed"`
	HsmsPendingDeletion     []string                 `json:"HsmsPendingDeletion"`
	HsmsPendingRegistration []string                 `json:"HsmsPendingRegistration"`
	Label                   *string                  `json:"Label"`
	LastModifiedTimestamp   *string                  `json:"LastModifiedTimestamp"`
	PartitionSerialList     []string                 `json:"PartitionSerialList"`
	State                   *CloudHsmObjectStateEnum `json:"State"`
}
