package shared

type VendorNameEnum string

const (
	VendorNameEnumGitHub   VendorNameEnum = "GitHub"
	VendorNameEnumGitLab   VendorNameEnum = "GitLab"
	VendorNameEnumNativeS3 VendorNameEnum = "NativeS3"
)
