import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SsmControls
/** 
 * Amazon Web Services Systems Manager (SSM) specific remediation controls.
**/
export class SsmControls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConcurrentExecutionRatePercentage" })
  concurrentExecutionRatePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=ErrorPercentage" })
  errorPercentage?: number;
}
