import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPipelineReprocessingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=reprocessingId" })
  reprocessingId?: string;
}
