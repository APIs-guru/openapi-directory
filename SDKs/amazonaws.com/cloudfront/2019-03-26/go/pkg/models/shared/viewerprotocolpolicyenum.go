package shared

type ViewerProtocolPolicyEnum string

const (
	ViewerProtocolPolicyEnumAllowAll        ViewerProtocolPolicyEnum = "allow-all"
	ViewerProtocolPolicyEnumHTTPSOnly       ViewerProtocolPolicyEnum = "https-only"
	ViewerProtocolPolicyEnumRedirectToHTTPS ViewerProtocolPolicyEnum = "redirect-to-https"
)
