package shared

type FargateProfileStatusEnum string

const (
	FargateProfileStatusEnumCreating     FargateProfileStatusEnum = "CREATING"
	FargateProfileStatusEnumActive       FargateProfileStatusEnum = "ACTIVE"
	FargateProfileStatusEnumDeleting     FargateProfileStatusEnum = "DELETING"
	FargateProfileStatusEnumCreateFailed FargateProfileStatusEnum = "CREATE_FAILED"
	FargateProfileStatusEnumDeleteFailed FargateProfileStatusEnum = "DELETE_FAILED"
)
