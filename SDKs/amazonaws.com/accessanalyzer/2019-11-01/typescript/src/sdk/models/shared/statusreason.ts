import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReasonCodeEnum } from "./reasoncodeenum";


// StatusReason
/** 
 * Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
**/
export class StatusReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: ReasonCodeEnum;
}
