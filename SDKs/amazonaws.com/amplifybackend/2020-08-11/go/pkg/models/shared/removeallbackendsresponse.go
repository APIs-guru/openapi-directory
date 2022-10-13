package shared

type RemoveAllBackendsResponse struct {
	AppID     *string `json:"AppId"`
	Error     *string `json:"Error"`
	JobID     *string `json:"JobId"`
	Operation *string `json:"Operation"`
	Status    *string `json:"Status"`
}
