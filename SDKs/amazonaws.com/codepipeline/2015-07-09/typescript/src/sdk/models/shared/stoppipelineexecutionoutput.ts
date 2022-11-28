import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPipelineExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
