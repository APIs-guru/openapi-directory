package shared

type UpdateTypeEnum string

const (
	UpdateTypeEnumVersionUpdate                      UpdateTypeEnum = "VersionUpdate"
	UpdateTypeEnumEndpointAccessUpdate               UpdateTypeEnum = "EndpointAccessUpdate"
	UpdateTypeEnumLoggingUpdate                      UpdateTypeEnum = "LoggingUpdate"
	UpdateTypeEnumConfigUpdate                       UpdateTypeEnum = "ConfigUpdate"
	UpdateTypeEnumAssociateIdentityProviderConfig    UpdateTypeEnum = "AssociateIdentityProviderConfig"
	UpdateTypeEnumDisassociateIdentityProviderConfig UpdateTypeEnum = "DisassociateIdentityProviderConfig"
	UpdateTypeEnumAssociateEncryptionConfig          UpdateTypeEnum = "AssociateEncryptionConfig"
	UpdateTypeEnumAddonUpdate                        UpdateTypeEnum = "AddonUpdate"
)
