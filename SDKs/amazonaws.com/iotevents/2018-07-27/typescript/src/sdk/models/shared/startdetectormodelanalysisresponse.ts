import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartDetectorModelAnalysisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisId" })
  analysisId?: string;
}
