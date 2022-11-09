import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactsTypeEnum } from "./artifactstypeenum";


// ResolvedArtifact
/** 
 * Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
**/
export class ResolvedArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=type" })
  type?: ArtifactsTypeEnum;
}
