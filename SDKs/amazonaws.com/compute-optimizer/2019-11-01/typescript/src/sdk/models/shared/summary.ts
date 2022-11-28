import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingEnum } from "./findingenum";
import { ReasonCodeSummary } from "./reasoncodesummary";



// Summary
/** 
 * The summary of a recommendation.
**/
export class Summary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: FindingEnum;

  @SpeakeasyMetadata({ data: "json, name=reasonCodeSummaries", elemType: ReasonCodeSummary })
  reasonCodeSummaries?: ReasonCodeSummary[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
