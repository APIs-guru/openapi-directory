import { SpeakeasyBase } from "../../../internal/utils";
import { ActionContext } from "./actioncontext";
import { StageContext } from "./stagecontext";
/**
 * <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
**/
export declare class PipelineContext extends SpeakeasyBase {
    action?: ActionContext;
    pipelineArn?: string;
    pipelineExecutionId?: string;
    pipelineName?: string;
    stage?: StageContext;
}
