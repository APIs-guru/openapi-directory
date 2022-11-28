import { SpeakeasyBase } from "../../../internal/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
/**
 * Information about build output artifacts.
**/
export declare class BuildArtifacts extends SpeakeasyBase {
    artifactIdentifier?: string;
    bucketOwnerAccess?: BucketOwnerAccessEnum;
    encryptionDisabled?: boolean;
    location?: string;
    md5sum?: string;
    overrideArtifactName?: boolean;
    sha256sum?: string;
}
