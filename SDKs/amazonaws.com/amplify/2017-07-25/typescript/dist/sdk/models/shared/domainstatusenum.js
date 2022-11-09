export var DomainStatusEnum;
(function (DomainStatusEnum) {
    DomainStatusEnum["PendingVerification"] = "PENDING_VERIFICATION";
    DomainStatusEnum["InProgress"] = "IN_PROGRESS";
    DomainStatusEnum["Available"] = "AVAILABLE";
    DomainStatusEnum["PendingDeployment"] = "PENDING_DEPLOYMENT";
    DomainStatusEnum["Failed"] = "FAILED";
    DomainStatusEnum["Creating"] = "CREATING";
    DomainStatusEnum["RequestingCertificate"] = "REQUESTING_CERTIFICATE";
    DomainStatusEnum["Updating"] = "UPDATING";
})(DomainStatusEnum || (DomainStatusEnum = {}));
