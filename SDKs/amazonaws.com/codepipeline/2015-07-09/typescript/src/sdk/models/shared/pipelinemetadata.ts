import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineMetadata
/** 
 * Information about a pipeline.
**/
export class PipelineMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=pipelineArn" })
  pipelineArn?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
