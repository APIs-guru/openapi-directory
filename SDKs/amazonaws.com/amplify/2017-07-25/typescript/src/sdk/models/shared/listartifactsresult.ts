import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Artifact } from "./artifact";


// ListArtifactsResult
/** 
 *  The result structure for the list artifacts request. 
**/
export class ListArtifactsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts", elemType: shared.Artifact })
  artifacts: Artifact[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
