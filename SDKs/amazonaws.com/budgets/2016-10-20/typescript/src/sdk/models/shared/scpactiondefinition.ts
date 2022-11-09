import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScpActionDefinition
/** 
 *  The service control policies (SCP) action definition details. 
**/
export class ScpActionDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;

  @Metadata({ data: "json, name=TargetIds" })
  targetIds: string[];
}
