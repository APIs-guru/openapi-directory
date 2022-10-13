package shared

type UpdateParamTypeEnum string

const (
	UpdateParamTypeEnumVersion                  UpdateParamTypeEnum = "Version"
	UpdateParamTypeEnumPlatformVersion          UpdateParamTypeEnum = "PlatformVersion"
	UpdateParamTypeEnumEndpointPrivateAccess    UpdateParamTypeEnum = "EndpointPrivateAccess"
	UpdateParamTypeEnumEndpointPublicAccess     UpdateParamTypeEnum = "EndpointPublicAccess"
	UpdateParamTypeEnumClusterLogging           UpdateParamTypeEnum = "ClusterLogging"
	UpdateParamTypeEnumDesiredSize              UpdateParamTypeEnum = "DesiredSize"
	UpdateParamTypeEnumLabelsToAdd              UpdateParamTypeEnum = "LabelsToAdd"
	UpdateParamTypeEnumLabelsToRemove           UpdateParamTypeEnum = "LabelsToRemove"
	UpdateParamTypeEnumTaintsToAdd              UpdateParamTypeEnum = "TaintsToAdd"
	UpdateParamTypeEnumTaintsToRemove           UpdateParamTypeEnum = "TaintsToRemove"
	UpdateParamTypeEnumMaxSize                  UpdateParamTypeEnum = "MaxSize"
	UpdateParamTypeEnumMinSize                  UpdateParamTypeEnum = "MinSize"
	UpdateParamTypeEnumReleaseVersion           UpdateParamTypeEnum = "ReleaseVersion"
	UpdateParamTypeEnumPublicAccessCidrs        UpdateParamTypeEnum = "PublicAccessCidrs"
	UpdateParamTypeEnumLaunchTemplateName       UpdateParamTypeEnum = "LaunchTemplateName"
	UpdateParamTypeEnumLaunchTemplateVersion    UpdateParamTypeEnum = "LaunchTemplateVersion"
	UpdateParamTypeEnumIdentityProviderConfig   UpdateParamTypeEnum = "IdentityProviderConfig"
	UpdateParamTypeEnumEncryptionConfig         UpdateParamTypeEnum = "EncryptionConfig"
	UpdateParamTypeEnumAddonVersion             UpdateParamTypeEnum = "AddonVersion"
	UpdateParamTypeEnumServiceAccountRoleArn    UpdateParamTypeEnum = "ServiceAccountRoleArn"
	UpdateParamTypeEnumResolveConflicts         UpdateParamTypeEnum = "ResolveConflicts"
	UpdateParamTypeEnumMaxUnavailable           UpdateParamTypeEnum = "MaxUnavailable"
	UpdateParamTypeEnumMaxUnavailablePercentage UpdateParamTypeEnum = "MaxUnavailablePercentage"
)
