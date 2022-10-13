package shared

type KeyPatchCapabilitiesEnum string

const (
	KeyPatchCapabilitiesEnumPublish         KeyPatchCapabilitiesEnum = "publish"
	KeyPatchCapabilitiesEnumSubscribe       KeyPatchCapabilitiesEnum = "subscribe"
	KeyPatchCapabilitiesEnumHistory         KeyPatchCapabilitiesEnum = "history"
	KeyPatchCapabilitiesEnumPresence        KeyPatchCapabilitiesEnum = "presence"
	KeyPatchCapabilitiesEnumChannelMetadata KeyPatchCapabilitiesEnum = "channel-metadata"
	KeyPatchCapabilitiesEnumPushAdmin       KeyPatchCapabilitiesEnum = "push-admin"
	KeyPatchCapabilitiesEnumPushSubscribe   KeyPatchCapabilitiesEnum = "push-subscribe"
	KeyPatchCapabilitiesEnumStatistics      KeyPatchCapabilitiesEnum = "statistics"
)

type KeyPatch struct {
	Capabilities []KeyPatchCapabilitiesEnum `json:"capabilities"`
	Channels     *string                    `json:"channels"`
	Name         *string                    `json:"name"`
}
