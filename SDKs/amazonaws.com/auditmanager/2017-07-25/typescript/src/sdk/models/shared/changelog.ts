import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnumEnum } from "./actionenumenum";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";



// ChangeLog
/** 
 *  The record of a change within Audit Manager, such as a modified assessment, a delegated control set, and so on. 
**/
export class ChangeLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ActionEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: ObjectTypeEnumEnum;
}
