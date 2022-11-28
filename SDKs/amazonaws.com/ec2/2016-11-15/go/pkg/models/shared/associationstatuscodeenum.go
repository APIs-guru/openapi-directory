package shared

type AssociationStatusCodeEnum string

const (
	AssociationStatusCodeEnumAssociating       AssociationStatusCodeEnum = "associating"
	AssociationStatusCodeEnumAssociated        AssociationStatusCodeEnum = "associated"
	AssociationStatusCodeEnumAssociationFailed AssociationStatusCodeEnum = "association-failed"
	AssociationStatusCodeEnumDisassociating    AssociationStatusCodeEnum = "disassociating"
	AssociationStatusCodeEnumDisassociated     AssociationStatusCodeEnum = "disassociated"
)
