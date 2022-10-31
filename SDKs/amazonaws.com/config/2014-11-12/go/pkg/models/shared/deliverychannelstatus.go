package shared

type DeliveryChannelStatus struct {
	ConfigHistoryDeliveryInfo  *ConfigExportDeliveryInfo `json:"configHistoryDeliveryInfo,omitempty"`
	ConfigSnapshotDeliveryInfo *ConfigExportDeliveryInfo `json:"configSnapshotDeliveryInfo,omitempty"`
	ConfigStreamDeliveryInfo   *ConfigStreamDeliveryInfo `json:"configStreamDeliveryInfo,omitempty"`
	Name                       *string                   `json:"name,omitempty"`
}
