import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetTerminationProtectionInput
/** 
 *  The input argument to the <a>TerminationProtection</a> operation. 
**/
export class SetTerminationProtectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobFlowIds" })
  jobFlowIds: string[];

  @Metadata({ data: "json, name=TerminationProtected" })
  terminationProtected: boolean;
}
