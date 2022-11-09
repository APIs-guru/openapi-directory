import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnalysisResultLocation
/** 
 * Contains information that you can use to locate the field in your detector model that the analysis result references.
**/
export class AnalysisResultLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;
}
