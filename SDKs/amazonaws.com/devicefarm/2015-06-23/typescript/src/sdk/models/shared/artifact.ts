import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";


// Artifact
/** 
 * Represents the output of a test. Examples of artifacts include logs and screenshots.
**/
export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: ArtifactTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
