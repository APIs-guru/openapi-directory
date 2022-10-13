package shared

type BuildPhaseTypeEnum string

const (
	BuildPhaseTypeEnumSubmitted       BuildPhaseTypeEnum = "SUBMITTED"
	BuildPhaseTypeEnumQueued          BuildPhaseTypeEnum = "QUEUED"
	BuildPhaseTypeEnumProvisioning    BuildPhaseTypeEnum = "PROVISIONING"
	BuildPhaseTypeEnumDownloadSource  BuildPhaseTypeEnum = "DOWNLOAD_SOURCE"
	BuildPhaseTypeEnumInstall         BuildPhaseTypeEnum = "INSTALL"
	BuildPhaseTypeEnumPreBuild        BuildPhaseTypeEnum = "PRE_BUILD"
	BuildPhaseTypeEnumBuild           BuildPhaseTypeEnum = "BUILD"
	BuildPhaseTypeEnumPostBuild       BuildPhaseTypeEnum = "POST_BUILD"
	BuildPhaseTypeEnumUploadArtifacts BuildPhaseTypeEnum = "UPLOAD_ARTIFACTS"
	BuildPhaseTypeEnumFinalizing      BuildPhaseTypeEnum = "FINALIZING"
	BuildPhaseTypeEnumCompleted       BuildPhaseTypeEnum = "COMPLETED"
)
