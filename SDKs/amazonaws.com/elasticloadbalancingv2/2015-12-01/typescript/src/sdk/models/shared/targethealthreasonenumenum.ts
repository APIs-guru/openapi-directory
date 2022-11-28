


export enum TargetHealthReasonEnumEnum {
    ElbRegistrationInProgress = "Elb.RegistrationInProgress",
    ElbInitialHealthChecking = "Elb.InitialHealthChecking",
    TargetResponseCodeMismatch = "Target.ResponseCodeMismatch",
    TargetTimeout = "Target.Timeout",
    TargetFailedHealthChecks = "Target.FailedHealthChecks",
    TargetNotRegistered = "Target.NotRegistered",
    TargetNotInUse = "Target.NotInUse",
    TargetDeregistrationInProgress = "Target.DeregistrationInProgress",
    TargetInvalidState = "Target.InvalidState",
    TargetIpUnusable = "Target.IpUnusable",
    TargetHealthCheckDisabled = "Target.HealthCheckDisabled",
    ElbInternalError = "Elb.InternalError"
}
