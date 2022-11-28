import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { ArtifactNamespaceEnum } from "./artifactnamespaceenum";
import { ArtifactPackagingEnum } from "./artifactpackagingenum";
import { ArtifactsTypeEnum } from "./artifactstypeenum";



// ProjectArtifacts
/** 
 * Information about the build output artifacts for the build project.
**/
export class ProjectArtifacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactIdentifier" })
  artifactIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketOwnerAccess" })
  bucketOwnerAccess?: BucketOwnerAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceType" })
  namespaceType?: ArtifactNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=overrideArtifactName" })
  overrideArtifactName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=packaging" })
  packaging?: ArtifactPackagingEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ArtifactsTypeEnum;
}
