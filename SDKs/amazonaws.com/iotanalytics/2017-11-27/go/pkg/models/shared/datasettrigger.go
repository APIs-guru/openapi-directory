package shared

type DatasetTrigger struct {
	Dataset  *TriggeringDataset `json:"dataset"`
	Schedule *Schedule          `json:"schedule"`
}
