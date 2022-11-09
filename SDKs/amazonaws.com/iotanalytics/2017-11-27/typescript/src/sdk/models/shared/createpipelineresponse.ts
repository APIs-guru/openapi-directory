import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineArn" })
  pipelineArn?: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName?: string;
}
