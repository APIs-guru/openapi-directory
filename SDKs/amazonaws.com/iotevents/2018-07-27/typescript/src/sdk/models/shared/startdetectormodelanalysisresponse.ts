import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartDetectorModelAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisId" })
  analysisId?: string;
}
