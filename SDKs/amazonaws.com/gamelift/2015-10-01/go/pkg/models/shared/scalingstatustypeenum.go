package shared




type ScalingStatusTypeEnum string

const (
    ScalingStatusTypeEnumActive ScalingStatusTypeEnum = "ACTIVE"
ScalingStatusTypeEnumUpdateRequested ScalingStatusTypeEnum = "UPDATE_REQUESTED"
ScalingStatusTypeEnumUpdating ScalingStatusTypeEnum = "UPDATING"
ScalingStatusTypeEnumDeleteRequested ScalingStatusTypeEnum = "DELETE_REQUESTED"
ScalingStatusTypeEnumDeleting ScalingStatusTypeEnum = "DELETING"
ScalingStatusTypeEnumDeleted ScalingStatusTypeEnum = "DELETED"
ScalingStatusTypeEnumError ScalingStatusTypeEnum = "ERROR"
)


