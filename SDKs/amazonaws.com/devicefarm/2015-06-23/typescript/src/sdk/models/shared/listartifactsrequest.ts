import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactCategoryEnum } from "./artifactcategoryenum";



// ListArtifactsRequest
/** 
 * Represents a request to the list artifacts operation.
**/
export class ListArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ArtifactCategoryEnum;
}
