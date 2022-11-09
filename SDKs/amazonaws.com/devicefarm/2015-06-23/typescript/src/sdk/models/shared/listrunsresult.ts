import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Run } from "./run";


// ListRunsResult
/** 
 * Represents the result of a list runs request.
**/
export class ListRunsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=runs", elemType: shared.Run })
  runs?: Run[];
}
