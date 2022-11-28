export var BuildPhaseTypeEnum;
(function (BuildPhaseTypeEnum) {
    BuildPhaseTypeEnum["Submitted"] = "SUBMITTED";
    BuildPhaseTypeEnum["Queued"] = "QUEUED";
    BuildPhaseTypeEnum["Provisioning"] = "PROVISIONING";
    BuildPhaseTypeEnum["DownloadSource"] = "DOWNLOAD_SOURCE";
    BuildPhaseTypeEnum["Install"] = "INSTALL";
    BuildPhaseTypeEnum["PreBuild"] = "PRE_BUILD";
    BuildPhaseTypeEnum["Build"] = "BUILD";
    BuildPhaseTypeEnum["PostBuild"] = "POST_BUILD";
    BuildPhaseTypeEnum["UploadArtifacts"] = "UPLOAD_ARTIFACTS";
    BuildPhaseTypeEnum["Finalizing"] = "FINALIZING";
    BuildPhaseTypeEnum["Completed"] = "COMPLETED";
})(BuildPhaseTypeEnum || (BuildPhaseTypeEnum = {}));
