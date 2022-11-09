export var CertificateStatusEnum;
(function (CertificateStatusEnum) {
    CertificateStatusEnum["PendingValidation"] = "PENDING_VALIDATION";
    CertificateStatusEnum["Issued"] = "ISSUED";
    CertificateStatusEnum["Inactive"] = "INACTIVE";
    CertificateStatusEnum["Expired"] = "EXPIRED";
    CertificateStatusEnum["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
    CertificateStatusEnum["Revoked"] = "REVOKED";
    CertificateStatusEnum["Failed"] = "FAILED";
})(CertificateStatusEnum || (CertificateStatusEnum = {}));
