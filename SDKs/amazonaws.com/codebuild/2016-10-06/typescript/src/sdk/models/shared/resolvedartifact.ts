import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactsTypeEnum } from "./artifactstypeenum";



// ResolvedArtifact
/** 
 * Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
**/
export class ResolvedArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ArtifactsTypeEnum;
}
