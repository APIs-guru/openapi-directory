import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalysisResult } from "./analysisresult";


export class GetDetectorModelAnalysisResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisResults", elemType: shared.AnalysisResult })
  analysisResults?: AnalysisResult[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
