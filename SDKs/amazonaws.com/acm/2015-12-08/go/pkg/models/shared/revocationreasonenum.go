package shared




type RevocationReasonEnum string

const (
    RevocationReasonEnumUnspecified RevocationReasonEnum = "UNSPECIFIED"
RevocationReasonEnumKeyCompromise RevocationReasonEnum = "KEY_COMPROMISE"
RevocationReasonEnumCaCompromise RevocationReasonEnum = "CA_COMPROMISE"
RevocationReasonEnumAffiliationChanged RevocationReasonEnum = "AFFILIATION_CHANGED"
RevocationReasonEnumSuperceded RevocationReasonEnum = "SUPERCEDED"
RevocationReasonEnumCessationOfOperation RevocationReasonEnum = "CESSATION_OF_OPERATION"
RevocationReasonEnumCertificateHold RevocationReasonEnum = "CERTIFICATE_HOLD"
RevocationReasonEnumRemoveFromCrl RevocationReasonEnum = "REMOVE_FROM_CRL"
RevocationReasonEnumPrivilegeWithdrawn RevocationReasonEnum = "PRIVILEGE_WITHDRAWN"
RevocationReasonEnumAaCompromise RevocationReasonEnum = "A_A_COMPROMISE"
)


