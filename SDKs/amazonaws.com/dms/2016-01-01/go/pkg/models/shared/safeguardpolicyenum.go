package shared

type SafeguardPolicyEnum string

const (
	SafeguardPolicyEnumRelyOnSQLServerReplicationAgent SafeguardPolicyEnum = "rely-on-sql-server-replication-agent"
	SafeguardPolicyEnumExclusiveAutomaticTruncation    SafeguardPolicyEnum = "exclusive-automatic-truncation"
	SafeguardPolicyEnumSharedAutomaticTruncation       SafeguardPolicyEnum = "shared-automatic-truncation"
)
