package shared

type DescribeListenersOutput struct {
	Listeners  []Listener
	NextMarker *string
}
