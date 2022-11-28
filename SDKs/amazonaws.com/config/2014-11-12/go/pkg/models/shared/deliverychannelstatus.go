package shared

// DeliveryChannelStatus
// <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
type DeliveryChannelStatus struct {
	ConfigHistoryDeliveryInfo  *ConfigExportDeliveryInfo `json:"configHistoryDeliveryInfo,omitempty"`
	ConfigSnapshotDeliveryInfo *ConfigExportDeliveryInfo `json:"configSnapshotDeliveryInfo,omitempty"`
	ConfigStreamDeliveryInfo   *ConfigStreamDeliveryInfo `json:"configStreamDeliveryInfo,omitempty"`
	Name                       *string                   `json:"name,omitempty"`
}
