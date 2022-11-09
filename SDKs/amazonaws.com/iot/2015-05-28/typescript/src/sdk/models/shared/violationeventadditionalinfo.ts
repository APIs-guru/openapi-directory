import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfidenceLevelEnum } from "./confidencelevelenum";


// ViolationEventAdditionalInfo
/** 
 *  The details of a violation event. 
**/
export class ViolationEventAdditionalInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceLevel" })
  confidenceLevel?: ConfidenceLevelEnum;
}
