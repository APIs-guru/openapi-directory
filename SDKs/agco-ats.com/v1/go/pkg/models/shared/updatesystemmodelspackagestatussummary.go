package shared

type UpdateSystemModelsPackageStatusSummary struct {
	AverageDownloadTime *string                           `json:"AverageDownloadTime"`
	AverageInstallTime  *string                           `json:"AverageInstallTime"`
	Downloaded          *int64                            `json:"Downloaded"`
	Error               *int32                            `json:"Error"`
	Installed           *int64                            `json:"Installed"`
	Package             *string                           `json:"Package"`
	PackageID           *string                           `json:"PackageID"`
	PackageStatusItems  []UpdateSystemModelsPackageStatus `json:"PackageStatusItems"`
}
