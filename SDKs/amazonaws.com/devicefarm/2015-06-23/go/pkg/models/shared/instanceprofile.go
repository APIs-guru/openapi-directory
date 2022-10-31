package shared



type InstanceProfile struct {
    Arn *string `json:"arn,omitempty"`
    Description *string `json:"description,omitempty"`
    ExcludeAppPackagesFromCleanup []string `json:"excludeAppPackagesFromCleanup,omitempty"`
    Name *string `json:"name,omitempty"`
    PackageCleanup *bool `json:"packageCleanup,omitempty"`
    RebootAfterUse *bool `json:"rebootAfterUse,omitempty"`
    
}

