import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";



// Artifact
/** 
 * Represents the output of a test. Examples of artifacts include logs and screenshots.
**/
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ArtifactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
