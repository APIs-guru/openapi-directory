package shared

// ImagePackage
// Represents a package installed on an Image Builder image.
type ImagePackage struct {
	PackageName    *string `json:"packageName,omitempty"`
	PackageVersion *string `json:"packageVersion,omitempty"`
}
