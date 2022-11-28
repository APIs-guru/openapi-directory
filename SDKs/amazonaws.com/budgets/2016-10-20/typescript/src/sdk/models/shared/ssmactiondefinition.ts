import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionSubTypeEnum } from "./actionsubtypeenum";



// SsmActionDefinition
/** 
 *  The AWS Systems Manager (SSM) action definition details. 
**/
export class SsmActionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionSubType" })
  actionSubType: ActionSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region: string;
}
