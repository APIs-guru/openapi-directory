package shared



type CreateFileSystemLustreConfiguration struct {
    AutoImportPolicy *AutoImportPolicyTypeEnum `json:"AutoImportPolicy,omitempty"`
    AutomaticBackupRetentionDays *int64 `json:"AutomaticBackupRetentionDays,omitempty"`
    CopyTagsToBackups *bool `json:"CopyTagsToBackups,omitempty"`
    DailyAutomaticBackupStartTime *string `json:"DailyAutomaticBackupStartTime,omitempty"`
    DataCompressionType *DataCompressionTypeEnum `json:"DataCompressionType,omitempty"`
    DeploymentType *LustreDeploymentTypeEnum `json:"DeploymentType,omitempty"`
    DriveCacheType *DriveCacheTypeEnum `json:"DriveCacheType,omitempty"`
    ExportPath *string `json:"ExportPath,omitempty"`
    ImportPath *string `json:"ImportPath,omitempty"`
    ImportedFileChunkSize *int64 `json:"ImportedFileChunkSize,omitempty"`
    PerUnitStorageThroughput *int64 `json:"PerUnitStorageThroughput,omitempty"`
    WeeklyMaintenanceStartTime *string `json:"WeeklyMaintenanceStartTime,omitempty"`
    
}

