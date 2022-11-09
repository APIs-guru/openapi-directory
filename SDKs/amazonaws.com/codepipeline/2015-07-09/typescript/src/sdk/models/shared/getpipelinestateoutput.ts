import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StageState } from "./stagestate";


// GetPipelineStateOutput
/** 
 * Represents the output of a <code>GetPipelineState</code> action.
**/
export class GetPipelineStateOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @Metadata({ data: "json, name=pipelineVersion" })
  pipelineVersion?: number;

  @Metadata({ data: "json, name=stageStates", elemType: shared.StageState })
  stageStates?: StageState[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
