package shared

// DatasetTrigger
// The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
type DatasetTrigger struct {
	Dataset  *TriggeringDataset `json:"dataset,omitempty"`
	Schedule *Schedule          `json:"schedule,omitempty"`
}
