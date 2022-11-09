import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingReasonCodeEnum } from "./findingreasoncodeenum";


// ReasonCodeSummary
/** 
 * A summary of a finding reason code.
**/
export class ReasonCodeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: FindingReasonCodeEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
