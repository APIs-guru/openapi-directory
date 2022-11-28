import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobWorkerExecutorConfiguration
/** 
 * Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.
**/
export class JobWorkerExecutorConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pollingAccounts" })
  pollingAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=pollingServicePrincipals" })
  pollingServicePrincipals?: string[];
}
