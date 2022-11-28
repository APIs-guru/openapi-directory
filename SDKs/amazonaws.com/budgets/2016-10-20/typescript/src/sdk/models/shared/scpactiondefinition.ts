import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScpActionDefinition
/** 
 *  The service control policies (SCP) action definition details. 
**/
export class ScpActionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;

  @SpeakeasyMetadata({ data: "json, name=TargetIds" })
  targetIds: string[];
}
