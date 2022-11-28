package shared

type ModifyHostsResult struct {
	Successful   []string
	Unsuccessful []UnsuccessfulItem
}
