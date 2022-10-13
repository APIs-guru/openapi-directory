package shared

type UpdateSystemModelsPackageReport struct {
	Categories         []UpdateSystemModelsCategory `json:"Categories"`
	PackageDescription *string                      `json:"PackageDescription"`
	PackageID          *string                      `json:"PackageID"`
}
