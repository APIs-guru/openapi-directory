import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalysisResultLevelEnum } from "./analysisresultlevelenum";
import { AnalysisResultLocation } from "./analysisresultlocation";


// AnalysisResult
/** 
 * Contains the result of the analysis.
**/
export class AnalysisResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: AnalysisResultLevelEnum;

  @Metadata({ data: "json, name=locations", elemType: shared.AnalysisResultLocation })
  locations?: AnalysisResultLocation[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
