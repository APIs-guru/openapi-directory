package shared




type KeyPatchCapabilitiesEnum string

const (
    KeyPatchCapabilitiesEnumPublish KeyPatchCapabilitiesEnum = "publish"
KeyPatchCapabilitiesEnumSubscribe KeyPatchCapabilitiesEnum = "subscribe"
KeyPatchCapabilitiesEnumHistory KeyPatchCapabilitiesEnum = "history"
KeyPatchCapabilitiesEnumPresence KeyPatchCapabilitiesEnum = "presence"
KeyPatchCapabilitiesEnumChannelMetadata KeyPatchCapabilitiesEnum = "channel-metadata"
KeyPatchCapabilitiesEnumPushAdmin KeyPatchCapabilitiesEnum = "push-admin"
KeyPatchCapabilitiesEnumPushSubscribe KeyPatchCapabilitiesEnum = "push-subscribe"
KeyPatchCapabilitiesEnumStatistics KeyPatchCapabilitiesEnum = "statistics"
)


type KeyPatch struct {
    Capabilities []KeyPatchCapabilitiesEnum `json:"capabilities,omitempty"`
    Channels *string `json:"channels,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

