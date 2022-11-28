import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPipelineExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abandon" })
  abandon?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
