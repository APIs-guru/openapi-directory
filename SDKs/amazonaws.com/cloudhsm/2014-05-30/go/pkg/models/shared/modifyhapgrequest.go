package shared

type ModifyHapgRequest struct {
	HapgArn             string   `json:"HapgArn"`
	Label               *string  `json:"Label"`
	PartitionSerialList []string `json:"PartitionSerialList"`
}
