package shared

type InstallStatusStatus struct {
	Finished  *bool  `json:"finished"`
	ItemCount *int64 `json:"itemCount"`
}

type InstallStatus struct {
	Status *InstallStatusStatus `json:"status"`
}
