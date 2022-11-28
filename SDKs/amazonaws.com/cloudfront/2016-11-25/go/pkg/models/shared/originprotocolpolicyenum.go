package shared

type OriginProtocolPolicyEnum string

const (
	OriginProtocolPolicyEnumHTTPOnly    OriginProtocolPolicyEnum = "http-only"
	OriginProtocolPolicyEnumMatchViewer OriginProtocolPolicyEnum = "match-viewer"
	OriginProtocolPolicyEnumHTTPSOnly   OriginProtocolPolicyEnum = "https-only"
)
