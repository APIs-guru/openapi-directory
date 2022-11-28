import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEngineTypeEnum } from "./executionenginetypeenum";
/**
 * Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.
**/
export declare class ExecutionEngineConfig extends SpeakeasyBase {
    id: string;
    masterInstanceSecurityGroupId?: string;
    type?: ExecutionEngineTypeEnum;
}
