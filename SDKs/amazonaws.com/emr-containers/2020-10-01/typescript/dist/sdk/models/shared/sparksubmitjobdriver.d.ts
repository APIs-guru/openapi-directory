import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The information about job driver for Spark submit.
**/
export declare class SparkSubmitJobDriver extends SpeakeasyBase {
    entryPoint: string;
    entryPointArguments?: string[];
    sparkSubmitParameters?: string;
}
