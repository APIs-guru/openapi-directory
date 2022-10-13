from dataclasses import dataclass, field
from typing import Enum,List

class ImageFailureCodeEnum(str, Enum):
    INVALID_IMAGE_DIGEST = "InvalidImageDigest"
    INVALID_IMAGE_TAG = "InvalidImageTag"
    IMAGE_TAG_DOES_NOT_MATCH_DIGEST = "ImageTagDoesNotMatchDigest"
    IMAGE_NOT_FOUND = "ImageNotFound"
    MISSING_DIGEST_AND_TAG = "MissingDigestAndTag"
    IMAGE_REFERENCED_BY_MANIFEST_LIST = "ImageReferencedByManifestList"
    KMS_ERROR = "KmsError"

