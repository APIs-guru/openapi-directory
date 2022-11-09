import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { ArtifactNamespaceEnum } from "./artifactnamespaceenum";
import { ArtifactPackagingEnum } from "./artifactpackagingenum";
import { ArtifactsTypeEnum } from "./artifactstypeenum";


// ProjectArtifacts
/** 
 * Information about the build output artifacts for the build project.
**/
export class ProjectArtifacts extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactIdentifier" })
  artifactIdentifier?: string;

  @Metadata({ data: "json, name=bucketOwnerAccess" })
  bucketOwnerAccess?: BucketOwnerAccessEnum;

  @Metadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespaceType" })
  namespaceType?: ArtifactNamespaceEnum;

  @Metadata({ data: "json, name=overrideArtifactName" })
  overrideArtifactName?: boolean;

  @Metadata({ data: "json, name=packaging" })
  packaging?: ArtifactPackagingEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=type" })
  type: ArtifactsTypeEnum;
}
