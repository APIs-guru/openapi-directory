import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineArn" })
  pipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName?: string;
}
