package shared

type GetServiceLinkedRoleDeletionStatusResponse struct {
	Reason *DeletionTaskFailureReasonType
	Status DeletionTaskStatusTypeEnum
}
