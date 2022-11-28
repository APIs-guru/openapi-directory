import { SpeakeasyBase } from "../../../internal/utils";
import { JobWorkerExecutorConfiguration } from "./jobworkerexecutorconfiguration";
import { LambdaExecutorConfiguration } from "./lambdaexecutorconfiguration";
/**
 * The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.
**/
export declare class ExecutorConfiguration extends SpeakeasyBase {
    jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
    lambdaExecutorConfiguration?: LambdaExecutorConfiguration;
}
