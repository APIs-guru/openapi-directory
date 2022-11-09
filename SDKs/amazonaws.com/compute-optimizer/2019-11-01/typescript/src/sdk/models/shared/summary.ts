import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingEnum } from "./findingenum";
import { ReasonCodeSummary } from "./reasoncodesummary";


// Summary
/** 
 * The summary of a recommendation.
**/
export class Summary extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: FindingEnum;

  @Metadata({ data: "json, name=reasonCodeSummaries", elemType: shared.ReasonCodeSummary })
  reasonCodeSummaries?: ReasonCodeSummary[];

  @Metadata({ data: "json, name=value" })
  value?: number;
}
