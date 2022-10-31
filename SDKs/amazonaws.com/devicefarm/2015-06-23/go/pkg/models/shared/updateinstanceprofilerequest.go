package shared



type UpdateInstanceProfileRequest struct {
    Arn string `json:"arn"`
    Description *string `json:"description,omitempty"`
    ExcludeAppPackagesFromCleanup []string `json:"excludeAppPackagesFromCleanup,omitempty"`
    Name *string `json:"name,omitempty"`
    PackageCleanup *bool `json:"packageCleanup,omitempty"`
    RebootAfterUse *bool `json:"rebootAfterUse,omitempty"`
    
}

