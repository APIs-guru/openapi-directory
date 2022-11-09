import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobWorkerExecutorConfiguration } from "./jobworkerexecutorconfiguration";
import { LambdaExecutorConfiguration } from "./lambdaexecutorconfiguration";


// ExecutorConfiguration
/** 
 * The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.
**/
export class ExecutorConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobWorkerExecutorConfiguration" })
  jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;

  @Metadata({ data: "json, name=lambdaExecutorConfiguration" })
  lambdaExecutorConfiguration?: LambdaExecutorConfiguration;
}
