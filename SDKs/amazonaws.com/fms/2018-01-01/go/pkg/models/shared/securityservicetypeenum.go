package shared

type SecurityServiceTypeEnum string

const (
	SecurityServiceTypeEnumWaf                        SecurityServiceTypeEnum = "WAF"
	SecurityServiceTypeEnumWafv2                      SecurityServiceTypeEnum = "WAFV2"
	SecurityServiceTypeEnumShieldAdvanced             SecurityServiceTypeEnum = "SHIELD_ADVANCED"
	SecurityServiceTypeEnumSecurityGroupsCommon       SecurityServiceTypeEnum = "SECURITY_GROUPS_COMMON"
	SecurityServiceTypeEnumSecurityGroupsContentAudit SecurityServiceTypeEnum = "SECURITY_GROUPS_CONTENT_AUDIT"
	SecurityServiceTypeEnumSecurityGroupsUsageAudit   SecurityServiceTypeEnum = "SECURITY_GROUPS_USAGE_AUDIT"
	SecurityServiceTypeEnumNetworkFirewall            SecurityServiceTypeEnum = "NETWORK_FIREWALL"
	SecurityServiceTypeEnumDNSFirewall                SecurityServiceTypeEnum = "DNS_FIREWALL"
)
