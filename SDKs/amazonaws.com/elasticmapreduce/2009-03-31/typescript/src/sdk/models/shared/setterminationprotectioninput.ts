import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetTerminationProtectionInput
/** 
 *  The input argument to the <a>TerminationProtection</a> operation. 
**/
export class SetTerminationProtectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobFlowIds" })
  jobFlowIds: string[];

  @SpeakeasyMetadata({ data: "json, name=TerminationProtected" })
  terminationProtected: boolean;
}
