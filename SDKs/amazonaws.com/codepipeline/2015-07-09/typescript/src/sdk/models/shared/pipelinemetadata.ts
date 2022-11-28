import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineMetadata
/** 
 * Information about a pipeline.
**/
export class PipelineMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=pipelineArn" })
  pipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
