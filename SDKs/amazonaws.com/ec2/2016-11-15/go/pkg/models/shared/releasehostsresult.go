package shared

type ReleaseHostsResult struct {
	Successful   []string
	Unsuccessful []UnsuccessfulItem
}
