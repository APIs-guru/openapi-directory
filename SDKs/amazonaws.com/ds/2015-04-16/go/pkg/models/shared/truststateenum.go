package shared




type TrustStateEnum string

const (
    TrustStateEnumCreating TrustStateEnum = "Creating"
TrustStateEnumCreated TrustStateEnum = "Created"
TrustStateEnumVerifying TrustStateEnum = "Verifying"
TrustStateEnumVerifyFailed TrustStateEnum = "VerifyFailed"
TrustStateEnumVerified TrustStateEnum = "Verified"
TrustStateEnumUpdating TrustStateEnum = "Updating"
TrustStateEnumUpdateFailed TrustStateEnum = "UpdateFailed"
TrustStateEnumUpdated TrustStateEnum = "Updated"
TrustStateEnumDeleting TrustStateEnum = "Deleting"
TrustStateEnumDeleted TrustStateEnum = "Deleted"
TrustStateEnumFailed TrustStateEnum = "Failed"
)


