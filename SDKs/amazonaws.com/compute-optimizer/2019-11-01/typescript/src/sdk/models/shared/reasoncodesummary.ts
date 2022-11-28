import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingReasonCodeEnum } from "./findingreasoncodeenum";



// ReasonCodeSummary
/** 
 * A summary of a finding reason code.
**/
export class ReasonCodeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: FindingReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
