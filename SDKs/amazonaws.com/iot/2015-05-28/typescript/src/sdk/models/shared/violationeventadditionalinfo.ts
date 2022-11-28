import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfidenceLevelEnum } from "./confidencelevelenum";



// ViolationEventAdditionalInfo
/** 
 *  The details of a violation event. 
**/
export class ViolationEventAdditionalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceLevel" })
  confidenceLevel?: ConfidenceLevelEnum;
}
