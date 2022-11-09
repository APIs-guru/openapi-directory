import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnumEnum } from "./actionenumenum";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";


// ChangeLog
/** 
 *  The record of a change within Audit Manager, such as a modified assessment, a delegated control set, and so on. 
**/
export class ChangeLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: ActionEnumEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: ObjectTypeEnumEnum;
}
