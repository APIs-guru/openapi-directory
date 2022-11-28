import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";



// ListArtifactsResult
/** 
 *  The result structure for the list artifacts request. 
**/
export class ListArtifactsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: Artifact })
  artifacts: Artifact[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
