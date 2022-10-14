package shared

type ImagePackage struct {
	PackageName    *string `json:"packageName,omitempty"`
	PackageVersion *string `json:"packageVersion,omitempty"`
}
