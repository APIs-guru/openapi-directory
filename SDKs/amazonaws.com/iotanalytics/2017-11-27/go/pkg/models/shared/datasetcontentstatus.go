package shared

type DatasetContentStatus struct {
	Reason *string                  `json:"reason"`
	State  *DatasetContentStateEnum `json:"state"`
}
