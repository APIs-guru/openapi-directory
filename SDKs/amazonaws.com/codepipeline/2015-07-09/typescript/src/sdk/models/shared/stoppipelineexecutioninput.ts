import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPipelineExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=abandon" })
  abandon?: boolean;

  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
