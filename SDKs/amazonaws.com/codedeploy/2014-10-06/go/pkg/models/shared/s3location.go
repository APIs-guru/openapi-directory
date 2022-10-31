package shared



type S3Location struct {
    Bucket *string `json:"bucket,omitempty"`
    BundleType *BundleTypeEnum `json:"bundleType,omitempty"`
    ETag *string `json:"eTag,omitempty"`
    Key *string `json:"key,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

