import { SpeakeasyBase } from "../../../internal/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { ArtifactNamespaceEnum } from "./artifactnamespaceenum";
import { ArtifactPackagingEnum } from "./artifactpackagingenum";
import { ArtifactsTypeEnum } from "./artifactstypeenum";
/**
 * Information about the build output artifacts for the build project.
**/
export declare class ProjectArtifacts extends SpeakeasyBase {
    artifactIdentifier?: string;
    bucketOwnerAccess?: BucketOwnerAccessEnum;
    encryptionDisabled?: boolean;
    location?: string;
    name?: string;
    namespaceType?: ArtifactNamespaceEnum;
    overrideArtifactName?: boolean;
    packaging?: ArtifactPackagingEnum;
    path?: string;
    type: ArtifactsTypeEnum;
}
