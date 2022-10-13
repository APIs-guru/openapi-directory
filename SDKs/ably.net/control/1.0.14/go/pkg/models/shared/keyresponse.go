package shared

type KeyResponseCapabilityEnum string

const (
	KeyResponseCapabilityEnumPublish         KeyResponseCapabilityEnum = "publish"
	KeyResponseCapabilityEnumSubscribe       KeyResponseCapabilityEnum = "subscribe"
	KeyResponseCapabilityEnumHistory         KeyResponseCapabilityEnum = "history"
	KeyResponseCapabilityEnumPresence        KeyResponseCapabilityEnum = "presence"
	KeyResponseCapabilityEnumChannelMetadata KeyResponseCapabilityEnum = "channel-metadata"
	KeyResponseCapabilityEnumPushAdmin       KeyResponseCapabilityEnum = "push-admin"
	KeyResponseCapabilityEnumPushSubscribe   KeyResponseCapabilityEnum = "push-subscribe"
	KeyResponseCapabilityEnumStatistics      KeyResponseCapabilityEnum = "statistics"
)

type KeyResponse struct {
	AppID      *string                                `json:"appId"`
	Capability map[string][]KeyResponseCapabilityEnum `json:"capability"`
	Created    *int64                                 `json:"created"`
	ID         *string                                `json:"id"`
	Key        *string                                `json:"key"`
	Modified   *int64                                 `json:"modified"`
	Name       *string                                `json:"name"`
}
