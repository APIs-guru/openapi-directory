package shared

// ReplaceRootVolumeTask
// Information about a root volume replacement task.
type ReplaceRootVolumeTask struct {
	CompleteTime            *string
	InstanceID              *string
	ReplaceRootVolumeTaskID *string
	StartTime               *string
	Tags                    []Tag
	TaskState               *ReplaceRootVolumeTaskStateEnum
}
