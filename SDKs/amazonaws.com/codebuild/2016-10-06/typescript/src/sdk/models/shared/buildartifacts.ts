import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";


// BuildArtifacts
/** 
 * Information about build output artifacts.
**/
export class BuildArtifacts extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactIdentifier" })
  artifactIdentifier?: string;

  @Metadata({ data: "json, name=bucketOwnerAccess" })
  bucketOwnerAccess?: BucketOwnerAccessEnum;

  @Metadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=md5sum" })
  md5sum?: string;

  @Metadata({ data: "json, name=overrideArtifactName" })
  overrideArtifactName?: boolean;

  @Metadata({ data: "json, name=sha256sum" })
  sha256sum?: string;
}
