package shared

type BuildBatchPhaseTypeEnum string

const (
	BuildBatchPhaseTypeEnumSubmitted         BuildBatchPhaseTypeEnum = "SUBMITTED"
	BuildBatchPhaseTypeEnumDownloadBatchspec BuildBatchPhaseTypeEnum = "DOWNLOAD_BATCHSPEC"
	BuildBatchPhaseTypeEnumInProgress        BuildBatchPhaseTypeEnum = "IN_PROGRESS"
	BuildBatchPhaseTypeEnumCombineArtifacts  BuildBatchPhaseTypeEnum = "COMBINE_ARTIFACTS"
	BuildBatchPhaseTypeEnumSucceeded         BuildBatchPhaseTypeEnum = "SUCCEEDED"
	BuildBatchPhaseTypeEnumFailed            BuildBatchPhaseTypeEnum = "FAILED"
	BuildBatchPhaseTypeEnumStopped           BuildBatchPhaseTypeEnum = "STOPPED"
)
