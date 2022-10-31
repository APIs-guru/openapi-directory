package shared

type FailureReasonEnum string

const (
	FailureReasonEnumNoAvailableContacts            FailureReasonEnum = "NO_AVAILABLE_CONTACTS"
	FailureReasonEnumAdditionalVerificationRequired FailureReasonEnum = "ADDITIONAL_VERIFICATION_REQUIRED"
	FailureReasonEnumDomainNotAllowed               FailureReasonEnum = "DOMAIN_NOT_ALLOWED"
	FailureReasonEnumInvalidPublicDomain            FailureReasonEnum = "INVALID_PUBLIC_DOMAIN"
	FailureReasonEnumDomainValidationDenied         FailureReasonEnum = "DOMAIN_VALIDATION_DENIED"
	FailureReasonEnumCaaError                       FailureReasonEnum = "CAA_ERROR"
	FailureReasonEnumPcaLimitExceeded               FailureReasonEnum = "PCA_LIMIT_EXCEEDED"
	FailureReasonEnumPcaInvalidArn                  FailureReasonEnum = "PCA_INVALID_ARN"
	FailureReasonEnumPcaInvalidState                FailureReasonEnum = "PCA_INVALID_STATE"
	FailureReasonEnumPcaRequestFailed               FailureReasonEnum = "PCA_REQUEST_FAILED"
	FailureReasonEnumPcaNameConstraintsValidation   FailureReasonEnum = "PCA_NAME_CONSTRAINTS_VALIDATION"
	FailureReasonEnumPcaResourceNotFound            FailureReasonEnum = "PCA_RESOURCE_NOT_FOUND"
	FailureReasonEnumPcaInvalidArgs                 FailureReasonEnum = "PCA_INVALID_ARGS"
	FailureReasonEnumPcaInvalidDuration             FailureReasonEnum = "PCA_INVALID_DURATION"
	FailureReasonEnumPcaAccessDenied                FailureReasonEnum = "PCA_ACCESS_DENIED"
	FailureReasonEnumSlrNotFound                    FailureReasonEnum = "SLR_NOT_FOUND"
	FailureReasonEnumOther                          FailureReasonEnum = "OTHER"
)
