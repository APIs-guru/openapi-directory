package shared

// InvalidProtocolSettings
// You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
type InvalidProtocolSettings struct {
	Message *string
}
