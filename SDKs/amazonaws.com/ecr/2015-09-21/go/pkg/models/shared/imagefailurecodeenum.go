package shared




type ImageFailureCodeEnum string

const (
    ImageFailureCodeEnumInvalidImageDigest ImageFailureCodeEnum = "InvalidImageDigest"
ImageFailureCodeEnumInvalidImageTag ImageFailureCodeEnum = "InvalidImageTag"
ImageFailureCodeEnumImageTagDoesNotMatchDigest ImageFailureCodeEnum = "ImageTagDoesNotMatchDigest"
ImageFailureCodeEnumImageNotFound ImageFailureCodeEnum = "ImageNotFound"
ImageFailureCodeEnumMissingDigestAndTag ImageFailureCodeEnum = "MissingDigestAndTag"
ImageFailureCodeEnumImageReferencedByManifestList ImageFailureCodeEnum = "ImageReferencedByManifestList"
ImageFailureCodeEnumKmsError ImageFailureCodeEnum = "KmsError"
)


