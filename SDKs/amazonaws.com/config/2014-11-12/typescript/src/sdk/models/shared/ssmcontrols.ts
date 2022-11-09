import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SsmControls
/** 
 * Amazon Web Services Systems Manager (SSM) specific remediation controls.
**/
export class SsmControls extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConcurrentExecutionRatePercentage" })
  concurrentExecutionRatePercentage?: number;

  @Metadata({ data: "json, name=ErrorPercentage" })
  errorPercentage?: number;
}
