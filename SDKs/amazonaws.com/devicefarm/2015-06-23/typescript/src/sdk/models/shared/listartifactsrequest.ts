import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactCategoryEnum } from "./artifactcategoryenum";


// ListArtifactsRequest
/** 
 * Represents a request to the list artifacts operation.
**/
export class ListArtifactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=type" })
  type: ArtifactCategoryEnum;
}
