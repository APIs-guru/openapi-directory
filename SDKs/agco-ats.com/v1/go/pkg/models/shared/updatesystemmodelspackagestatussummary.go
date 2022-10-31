package shared



type UpdateSystemModelsPackageStatusSummary struct {
    AverageDownloadTime *string `json:"AverageDownloadTime,omitempty"`
    AverageInstallTime *string `json:"AverageInstallTime,omitempty"`
    Downloaded *int64 `json:"Downloaded,omitempty"`
    Error *int32 `json:"Error,omitempty"`
    Installed *int64 `json:"Installed,omitempty"`
    Package *string `json:"Package,omitempty"`
    PackageID *string `json:"PackageID,omitempty"`
    PackageStatusItems []UpdateSystemModelsPackageStatus `json:"PackageStatusItems,omitempty"`
    
}

