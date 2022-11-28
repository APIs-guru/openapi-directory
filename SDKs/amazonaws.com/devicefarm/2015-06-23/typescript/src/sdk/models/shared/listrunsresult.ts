import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Run } from "./run";



// ListRunsResult
/** 
 * Represents the result of a list runs request.
**/
export class ListRunsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runs", elemType: Run })
  runs?: Run[];
}
