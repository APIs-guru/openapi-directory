import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";



// BuildArtifacts
/** 
 * Information about build output artifacts.
**/
export class BuildArtifacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactIdentifier" })
  artifactIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketOwnerAccess" })
  bucketOwnerAccess?: BucketOwnerAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=md5sum" })
  md5sum?: string;

  @SpeakeasyMetadata({ data: "json, name=overrideArtifactName" })
  overrideArtifactName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sha256sum" })
  sha256sum?: string;
}
