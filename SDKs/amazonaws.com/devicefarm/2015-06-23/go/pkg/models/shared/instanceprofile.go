package shared

type InstanceProfile struct {
	Arn                           *string  `json:"arn"`
	Description                   *string  `json:"description"`
	ExcludeAppPackagesFromCleanup []string `json:"excludeAppPackagesFromCleanup"`
	Name                          *string  `json:"name"`
	PackageCleanup                *bool    `json:"packageCleanup"`
	RebootAfterUse                *bool    `json:"rebootAfterUse"`
}
