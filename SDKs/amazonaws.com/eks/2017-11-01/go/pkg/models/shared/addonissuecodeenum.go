package shared

type AddonIssueCodeEnum string

const (
	AddonIssueCodeEnumAccessDenied                 AddonIssueCodeEnum = "AccessDenied"
	AddonIssueCodeEnumInternalFailure              AddonIssueCodeEnum = "InternalFailure"
	AddonIssueCodeEnumClusterUnreachable           AddonIssueCodeEnum = "ClusterUnreachable"
	AddonIssueCodeEnumInsufficientNumberOfReplicas AddonIssueCodeEnum = "InsufficientNumberOfReplicas"
	AddonIssueCodeEnumConfigurationConflict        AddonIssueCodeEnum = "ConfigurationConflict"
	AddonIssueCodeEnumAdmissionRequestDenied       AddonIssueCodeEnum = "AdmissionRequestDenied"
	AddonIssueCodeEnumUnsupportedAddonModification AddonIssueCodeEnum = "UnsupportedAddonModification"
	AddonIssueCodeEnumK8sResourceNotFound          AddonIssueCodeEnum = "K8sResourceNotFound"
)
