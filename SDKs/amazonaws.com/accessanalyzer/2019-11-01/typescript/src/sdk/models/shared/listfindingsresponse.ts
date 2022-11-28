import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingSummary } from "./findingsummary";



// ListFindingsResponse
/** 
 * The response to the request.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: FindingSummary })
  findings: FindingSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
