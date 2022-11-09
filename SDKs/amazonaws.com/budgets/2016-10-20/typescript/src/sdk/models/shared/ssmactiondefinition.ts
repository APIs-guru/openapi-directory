import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionSubTypeEnum } from "./actionsubtypeenum";


// SsmActionDefinition
/** 
 *  The AWS Systems Manager (SSM) action definition details. 
**/
export class SsmActionDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionSubType" })
  actionSubType: ActionSubTypeEnum;

  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds: string[];

  @Metadata({ data: "json, name=Region" })
  region: string;
}
