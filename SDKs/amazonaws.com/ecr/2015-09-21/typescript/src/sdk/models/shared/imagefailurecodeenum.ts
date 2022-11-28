


export enum ImageFailureCodeEnum {
    InvalidImageDigest = "InvalidImageDigest",
    InvalidImageTag = "InvalidImageTag",
    ImageTagDoesNotMatchDigest = "ImageTagDoesNotMatchDigest",
    ImageNotFound = "ImageNotFound",
    MissingDigestAndTag = "MissingDigestAndTag",
    ImageReferencedByManifestList = "ImageReferencedByManifestList",
    KmsError = "KmsError"
}
