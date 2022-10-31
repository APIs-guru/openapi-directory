package shared



type DatasetTrigger struct {
    Dataset *TriggeringDataset `json:"dataset,omitempty"`
    Schedule *Schedule `json:"schedule,omitempty"`
    
}

