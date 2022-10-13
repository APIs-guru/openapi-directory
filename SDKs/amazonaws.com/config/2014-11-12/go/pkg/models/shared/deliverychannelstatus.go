package shared

type DeliveryChannelStatus struct {
	ConfigHistoryDeliveryInfo  *ConfigExportDeliveryInfo `json:"configHistoryDeliveryInfo"`
	ConfigSnapshotDeliveryInfo *ConfigExportDeliveryInfo `json:"configSnapshotDeliveryInfo"`
	ConfigStreamDeliveryInfo   *ConfigStreamDeliveryInfo `json:"configStreamDeliveryInfo"`
	Name                       *string                   `json:"name"`
}
