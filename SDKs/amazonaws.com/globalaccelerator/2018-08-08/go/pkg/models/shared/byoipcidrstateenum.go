package shared

type ByoipCidrStateEnum string

const (
	ByoipCidrStateEnumPendingProvisioning   ByoipCidrStateEnum = "PENDING_PROVISIONING"
	ByoipCidrStateEnumReady                 ByoipCidrStateEnum = "READY"
	ByoipCidrStateEnumPendingAdvertising    ByoipCidrStateEnum = "PENDING_ADVERTISING"
	ByoipCidrStateEnumAdvertising           ByoipCidrStateEnum = "ADVERTISING"
	ByoipCidrStateEnumPendingWithdrawing    ByoipCidrStateEnum = "PENDING_WITHDRAWING"
	ByoipCidrStateEnumPendingDeprovisioning ByoipCidrStateEnum = "PENDING_DEPROVISIONING"
	ByoipCidrStateEnumDeprovisioned         ByoipCidrStateEnum = "DEPROVISIONED"
	ByoipCidrStateEnumFailedProvision       ByoipCidrStateEnum = "FAILED_PROVISION"
	ByoipCidrStateEnumFailedAdvertising     ByoipCidrStateEnum = "FAILED_ADVERTISING"
	ByoipCidrStateEnumFailedWithdraw        ByoipCidrStateEnum = "FAILED_WITHDRAW"
	ByoipCidrStateEnumFailedDeprovision     ByoipCidrStateEnum = "FAILED_DEPROVISION"
)
