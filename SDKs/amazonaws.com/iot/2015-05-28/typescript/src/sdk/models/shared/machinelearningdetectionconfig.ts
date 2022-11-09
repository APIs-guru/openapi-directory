import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfidenceLevelEnum } from "./confidencelevelenum";


// MachineLearningDetectionConfig
/** 
 *  The configuration of an ML Detect Security Profile. 
**/
export class MachineLearningDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceLevel" })
  confidenceLevel: ConfidenceLevelEnum;
}
