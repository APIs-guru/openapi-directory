package shared

type CreateInstanceProfileRequest struct {
	Description                   *string  `json:"description"`
	ExcludeAppPackagesFromCleanup []string `json:"excludeAppPackagesFromCleanup"`
	Name                          string   `json:"name"`
	PackageCleanup                *bool    `json:"packageCleanup"`
	RebootAfterUse                *bool    `json:"rebootAfterUse"`
}
