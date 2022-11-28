import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionContext } from "./actioncontext";
import { StageContext } from "./stagecontext";



// PipelineContext
/** 
 * <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
**/
export class PipelineContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ActionContext;

  @SpeakeasyMetadata({ data: "json, name=pipelineArn" })
  pipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: StageContext;
}
