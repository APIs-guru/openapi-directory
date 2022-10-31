package shared

type TaskTypeEnum string

const (
	TaskTypeEnumEvaluation            TaskTypeEnum = "EVALUATION"
	TaskTypeEnumLabelingSetGeneration TaskTypeEnum = "LABELING_SET_GENERATION"
	TaskTypeEnumImportLabels          TaskTypeEnum = "IMPORT_LABELS"
	TaskTypeEnumExportLabels          TaskTypeEnum = "EXPORT_LABELS"
	TaskTypeEnumFindMatches           TaskTypeEnum = "FIND_MATCHES"
)
