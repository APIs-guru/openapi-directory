import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaContainerParams } from "./lambdacontainerparams";
import { LambdaIsolationModeEnum } from "./lambdaisolationmodeenum";
/**
 * Contains parameters for a Linux process that contains an Lambda function.
**/
export declare class LambdaLinuxProcessParams extends SpeakeasyBase {
    containerParams?: LambdaContainerParams;
    isolationMode?: LambdaIsolationModeEnum;
}
