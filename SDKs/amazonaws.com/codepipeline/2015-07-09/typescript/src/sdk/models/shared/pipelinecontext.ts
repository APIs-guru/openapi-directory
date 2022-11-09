import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionContext } from "./actioncontext";
import { StageContext } from "./stagecontext";


// PipelineContext
/** 
 * <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
**/
export class PipelineContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: ActionContext;

  @Metadata({ data: "json, name=pipelineArn" })
  pipelineArn?: string;

  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: StageContext;
}
