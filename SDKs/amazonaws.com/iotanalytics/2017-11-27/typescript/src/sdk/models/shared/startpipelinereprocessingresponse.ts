import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPipelineReprocessingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reprocessingId" })
  reprocessingId?: string;
}
