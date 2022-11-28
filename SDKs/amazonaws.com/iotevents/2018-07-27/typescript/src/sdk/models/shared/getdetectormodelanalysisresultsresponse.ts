import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisResult } from "./analysisresult";



export class GetDetectorModelAnalysisResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisResults", elemType: AnalysisResult })
  analysisResults?: AnalysisResult[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
