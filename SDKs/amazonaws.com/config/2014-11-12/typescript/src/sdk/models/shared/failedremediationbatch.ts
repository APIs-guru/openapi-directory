import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationConfiguration } from "./remediationconfiguration";


// FailedRemediationBatch
/** 
 * List of each of the failed remediations with specific reasons.
**/
export class FailedRemediationBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedItems", elemType: shared.RemediationConfiguration })
  failedItems?: RemediationConfiguration[];

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;
}
