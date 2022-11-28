import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
**/
export declare class HadoopStepConfig extends SpeakeasyBase {
    args?: string[];
    jar?: string;
    mainClass?: string;
    properties?: Map<string, string>;
}
