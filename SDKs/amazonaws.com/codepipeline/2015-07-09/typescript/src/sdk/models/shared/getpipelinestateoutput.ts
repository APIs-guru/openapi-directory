import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageState } from "./stagestate";



// GetPipelineStateOutput
/** 
 * Represents the output of a <code>GetPipelineState</code> action.
**/
export class GetPipelineStateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineVersion" })
  pipelineVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=stageStates", elemType: StageState })
  stageStates?: StageState[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
