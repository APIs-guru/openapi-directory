package shared

type AccessMethodTypeEnum string

const (
	AccessMethodTypeEnumCaRepository        AccessMethodTypeEnum = "CA_REPOSITORY"
	AccessMethodTypeEnumResourcePkiManifest AccessMethodTypeEnum = "RESOURCE_PKI_MANIFEST"
	AccessMethodTypeEnumResourcePkiNotify   AccessMethodTypeEnum = "RESOURCE_PKI_NOTIFY"
)
