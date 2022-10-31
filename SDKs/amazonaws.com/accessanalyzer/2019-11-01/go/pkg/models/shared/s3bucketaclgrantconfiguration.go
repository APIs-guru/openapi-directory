package shared



type S3BucketACLGrantConfiguration struct {
    Grantee ACLGrantee `json:"grantee"`
    Permission ACLPermissionEnum `json:"permission"`
    
}

