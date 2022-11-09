import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterValue } from "./parametervalue";
/**
 * Contains the parameters for ActivatePipeline.
**/
export declare class ActivatePipelineInput extends SpeakeasyBase {
    parameterValues?: ParameterValue[];
    pipelineId: string;
    startTimestamp?: Date;
}
