import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";



// ListArtifactsResult
/** 
 * Represents the result of a list artifacts operation.
**/
export class ListArtifactsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: Artifact })
  artifacts?: Artifact[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
