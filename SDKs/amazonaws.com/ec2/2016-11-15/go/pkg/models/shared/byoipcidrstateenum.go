package shared

type ByoipCidrStateEnum string

const (
	ByoipCidrStateEnumAdvertised                         ByoipCidrStateEnum = "advertised"
	ByoipCidrStateEnumDeprovisioned                      ByoipCidrStateEnum = "deprovisioned"
	ByoipCidrStateEnumFailedDeprovision                  ByoipCidrStateEnum = "failed-deprovision"
	ByoipCidrStateEnumFailedProvision                    ByoipCidrStateEnum = "failed-provision"
	ByoipCidrStateEnumPendingDeprovision                 ByoipCidrStateEnum = "pending-deprovision"
	ByoipCidrStateEnumPendingProvision                   ByoipCidrStateEnum = "pending-provision"
	ByoipCidrStateEnumProvisioned                        ByoipCidrStateEnum = "provisioned"
	ByoipCidrStateEnumProvisionedNotPubliclyAdvertisable ByoipCidrStateEnum = "provisioned-not-publicly-advertisable"
)
