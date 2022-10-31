package shared

type PlayerSessionCreationPolicyEnum string

const (
	PlayerSessionCreationPolicyEnumAcceptAll PlayerSessionCreationPolicyEnum = "ACCEPT_ALL"
	PlayerSessionCreationPolicyEnumDenyAll   PlayerSessionCreationPolicyEnum = "DENY_ALL"
)
