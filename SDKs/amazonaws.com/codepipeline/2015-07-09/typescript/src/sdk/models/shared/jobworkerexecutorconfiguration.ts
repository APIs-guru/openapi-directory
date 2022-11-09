import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobWorkerExecutorConfiguration
/** 
 * Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.
**/
export class JobWorkerExecutorConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=pollingAccounts" })
  pollingAccounts?: string[];

  @Metadata({ data: "json, name=pollingServicePrincipals" })
  pollingServicePrincipals?: string[];
}
