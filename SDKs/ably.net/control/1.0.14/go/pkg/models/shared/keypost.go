package shared




type KeyPostCapabilitiesEnum string

const (
    KeyPostCapabilitiesEnumPublish KeyPostCapabilitiesEnum = "publish"
KeyPostCapabilitiesEnumSubscribe KeyPostCapabilitiesEnum = "subscribe"
KeyPostCapabilitiesEnumHistory KeyPostCapabilitiesEnum = "history"
KeyPostCapabilitiesEnumPresence KeyPostCapabilitiesEnum = "presence"
KeyPostCapabilitiesEnumChannelMetadata KeyPostCapabilitiesEnum = "channel-metadata"
KeyPostCapabilitiesEnumPushAdmin KeyPostCapabilitiesEnum = "push-admin"
KeyPostCapabilitiesEnumPushSubscribe KeyPostCapabilitiesEnum = "push-subscribe"
KeyPostCapabilitiesEnumStatistics KeyPostCapabilitiesEnum = "statistics"
)


type KeyPost struct {
    Capabilities []KeyPostCapabilitiesEnum `json:"capabilities"`
    Channels string `json:"channels"`
    Name string `json:"name"`
    
}

