import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisResultLevelEnum } from "./analysisresultlevelenum";
import { AnalysisResultLocation } from "./analysisresultlocation";



// AnalysisResult
/** 
 * Contains the result of the analysis.
**/
export class AnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: AnalysisResultLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: AnalysisResultLocation })
  locations?: AnalysisResultLocation[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
