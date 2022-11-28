package shared

type OriginRequestPolicyHeaderBehaviorEnum string

const (
	OriginRequestPolicyHeaderBehaviorEnumNone                            OriginRequestPolicyHeaderBehaviorEnum = "none"
	OriginRequestPolicyHeaderBehaviorEnumWhitelist                       OriginRequestPolicyHeaderBehaviorEnum = "whitelist"
	OriginRequestPolicyHeaderBehaviorEnumAllViewer                       OriginRequestPolicyHeaderBehaviorEnum = "allViewer"
	OriginRequestPolicyHeaderBehaviorEnumAllViewerAndWhitelistCloudFront OriginRequestPolicyHeaderBehaviorEnum = "allViewerAndWhitelistCloudFront"
)
