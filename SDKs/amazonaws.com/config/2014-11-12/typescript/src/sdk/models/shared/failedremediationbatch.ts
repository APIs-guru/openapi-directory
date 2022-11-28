import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationConfiguration } from "./remediationconfiguration";



// FailedRemediationBatch
/** 
 * List of each of the failed remediations with specific reasons.
**/
export class FailedRemediationBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedItems", elemType: RemediationConfiguration })
  failedItems?: RemediationConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
