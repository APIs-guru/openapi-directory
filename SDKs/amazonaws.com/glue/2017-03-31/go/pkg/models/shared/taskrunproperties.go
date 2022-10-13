package shared

type TaskRunProperties struct {
	ExportLabelsTaskRunProperties          *ExportLabelsTaskRunProperties          `json:"ExportLabelsTaskRunProperties"`
	FindMatchesTaskRunProperties           *FindMatchesTaskRunProperties           `json:"FindMatchesTaskRunProperties"`
	ImportLabelsTaskRunProperties          *ImportLabelsTaskRunProperties          `json:"ImportLabelsTaskRunProperties"`
	LabelingSetGenerationTaskRunProperties *LabelingSetGenerationTaskRunProperties `json:"LabelingSetGenerationTaskRunProperties"`
	TaskType                               *TaskTypeEnum                           `json:"TaskType"`
}
