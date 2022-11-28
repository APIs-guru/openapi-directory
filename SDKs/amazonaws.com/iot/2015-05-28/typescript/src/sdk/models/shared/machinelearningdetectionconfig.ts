import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfidenceLevelEnum } from "./confidencelevelenum";



// MachineLearningDetectionConfig
/** 
 *  The configuration of an ML Detect Security Profile. 
**/
export class MachineLearningDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceLevel" })
  confidenceLevel: ConfidenceLevelEnum;
}
