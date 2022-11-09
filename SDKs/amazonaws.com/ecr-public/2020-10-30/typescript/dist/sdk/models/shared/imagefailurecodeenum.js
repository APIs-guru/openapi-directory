export var ImageFailureCodeEnum;
(function (ImageFailureCodeEnum) {
    ImageFailureCodeEnum["InvalidImageDigest"] = "InvalidImageDigest";
    ImageFailureCodeEnum["InvalidImageTag"] = "InvalidImageTag";
    ImageFailureCodeEnum["ImageTagDoesNotMatchDigest"] = "ImageTagDoesNotMatchDigest";
    ImageFailureCodeEnum["ImageNotFound"] = "ImageNotFound";
    ImageFailureCodeEnum["MissingDigestAndTag"] = "MissingDigestAndTag";
    ImageFailureCodeEnum["ImageReferencedByManifestList"] = "ImageReferencedByManifestList";
    ImageFailureCodeEnum["KmsError"] = "KmsError";
})(ImageFailureCodeEnum || (ImageFailureCodeEnum = {}));
