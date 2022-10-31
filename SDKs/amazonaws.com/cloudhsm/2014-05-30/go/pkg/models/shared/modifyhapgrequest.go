package shared

type ModifyHapgRequest struct {
	HapgArn             string   `json:"HapgArn"`
	Label               *string  `json:"Label,omitempty"`
	PartitionSerialList []string `json:"PartitionSerialList,omitempty"`
}
