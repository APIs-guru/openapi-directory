package shared

type ServiceUpdatesMessage struct {
	Marker         *string
	ServiceUpdates []ServiceUpdate
}
