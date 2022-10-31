package shared




type KeyResponseCapabilityEnum string

const (
    KeyResponseCapabilityEnumPublish KeyResponseCapabilityEnum = "publish"
KeyResponseCapabilityEnumSubscribe KeyResponseCapabilityEnum = "subscribe"
KeyResponseCapabilityEnumHistory KeyResponseCapabilityEnum = "history"
KeyResponseCapabilityEnumPresence KeyResponseCapabilityEnum = "presence"
KeyResponseCapabilityEnumChannelMetadata KeyResponseCapabilityEnum = "channel-metadata"
KeyResponseCapabilityEnumPushAdmin KeyResponseCapabilityEnum = "push-admin"
KeyResponseCapabilityEnumPushSubscribe KeyResponseCapabilityEnum = "push-subscribe"
KeyResponseCapabilityEnumStatistics KeyResponseCapabilityEnum = "statistics"
)


type KeyResponse struct {
    AppID *string `json:"appId,omitempty"`
    Capability map[string][]KeyResponseCapabilityEnum `json:"capability,omitempty"`
    Created *int64 `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Key *string `json:"key,omitempty"`
    Modified *int64 `json:"modified,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

