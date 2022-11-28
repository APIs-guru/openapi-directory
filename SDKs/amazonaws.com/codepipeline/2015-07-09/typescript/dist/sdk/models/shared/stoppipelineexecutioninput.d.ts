import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopPipelineExecutionInput extends SpeakeasyBase {
    abandon?: boolean;
    pipelineExecutionId: string;
    pipelineName: string;
    reason?: string;
}
