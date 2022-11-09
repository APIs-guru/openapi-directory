import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingSummary } from "./findingsummary";


// ListFindingsResponse
/** 
 * The response to the request.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.FindingSummary })
  findings: FindingSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
