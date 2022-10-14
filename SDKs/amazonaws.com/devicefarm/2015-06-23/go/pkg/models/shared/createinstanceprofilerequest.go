package shared

type CreateInstanceProfileRequest struct {
	Description                   *string  `json:"description,omitempty"`
	ExcludeAppPackagesFromCleanup []string `json:"excludeAppPackagesFromCleanup,omitempty"`
	Name                          string   `json:"name"`
	PackageCleanup                *bool    `json:"packageCleanup,omitempty"`
	RebootAfterUse                *bool    `json:"rebootAfterUse,omitempty"`
}
