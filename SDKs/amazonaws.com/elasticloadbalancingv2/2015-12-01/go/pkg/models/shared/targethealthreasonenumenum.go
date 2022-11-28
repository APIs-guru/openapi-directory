package shared

type TargetHealthReasonEnumEnum string

const (
	TargetHealthReasonEnumEnumElbRegistrationInProgress      TargetHealthReasonEnumEnum = "Elb.RegistrationInProgress"
	TargetHealthReasonEnumEnumElbInitialHealthChecking       TargetHealthReasonEnumEnum = "Elb.InitialHealthChecking"
	TargetHealthReasonEnumEnumTargetResponseCodeMismatch     TargetHealthReasonEnumEnum = "Target.ResponseCodeMismatch"
	TargetHealthReasonEnumEnumTargetTimeout                  TargetHealthReasonEnumEnum = "Target.Timeout"
	TargetHealthReasonEnumEnumTargetFailedHealthChecks       TargetHealthReasonEnumEnum = "Target.FailedHealthChecks"
	TargetHealthReasonEnumEnumTargetNotRegistered            TargetHealthReasonEnumEnum = "Target.NotRegistered"
	TargetHealthReasonEnumEnumTargetNotInUse                 TargetHealthReasonEnumEnum = "Target.NotInUse"
	TargetHealthReasonEnumEnumTargetDeregistrationInProgress TargetHealthReasonEnumEnum = "Target.DeregistrationInProgress"
	TargetHealthReasonEnumEnumTargetInvalidState             TargetHealthReasonEnumEnum = "Target.InvalidState"
	TargetHealthReasonEnumEnumTargetIPUnusable               TargetHealthReasonEnumEnum = "Target.IpUnusable"
	TargetHealthReasonEnumEnumTargetHealthCheckDisabled      TargetHealthReasonEnumEnum = "Target.HealthCheckDisabled"
	TargetHealthReasonEnumEnumElbInternalError               TargetHealthReasonEnumEnum = "Elb.InternalError"
)
