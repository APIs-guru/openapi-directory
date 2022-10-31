package shared

type SmbSecurityDescriptorCopyFlagsEnum string

const (
	SmbSecurityDescriptorCopyFlagsEnumNone          SmbSecurityDescriptorCopyFlagsEnum = "NONE"
	SmbSecurityDescriptorCopyFlagsEnumOwnerDacl     SmbSecurityDescriptorCopyFlagsEnum = "OWNER_DACL"
	SmbSecurityDescriptorCopyFlagsEnumOwnerDaclSacl SmbSecurityDescriptorCopyFlagsEnum = "OWNER_DACL_SACL"
)
