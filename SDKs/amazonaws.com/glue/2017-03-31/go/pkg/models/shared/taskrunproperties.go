package shared

// TaskRunProperties
// The configuration properties for the task run.
type TaskRunProperties struct {
	ExportLabelsTaskRunProperties          *ExportLabelsTaskRunProperties          `json:"ExportLabelsTaskRunProperties,omitempty"`
	FindMatchesTaskRunProperties           *FindMatchesTaskRunProperties           `json:"FindMatchesTaskRunProperties,omitempty"`
	ImportLabelsTaskRunProperties          *ImportLabelsTaskRunProperties          `json:"ImportLabelsTaskRunProperties,omitempty"`
	LabelingSetGenerationTaskRunProperties *LabelingSetGenerationTaskRunProperties `json:"LabelingSetGenerationTaskRunProperties,omitempty"`
	TaskType                               *TaskTypeEnum                           `json:"TaskType,omitempty"`
}
