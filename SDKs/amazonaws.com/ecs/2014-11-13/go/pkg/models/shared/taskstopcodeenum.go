package shared

type TaskStopCodeEnum string

const (
	TaskStopCodeEnumTaskFailedToStart        TaskStopCodeEnum = "TaskFailedToStart"
	TaskStopCodeEnumEssentialContainerExited TaskStopCodeEnum = "EssentialContainerExited"
	TaskStopCodeEnumUserInitiated            TaskStopCodeEnum = "UserInitiated"
)
