import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnumEnum } from "./actionenumenum";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";
/**
 *  The record of a change within Audit Manager, such as a modified assessment, a delegated control set, and so on.
**/
export declare class ChangeLog extends SpeakeasyBase {
    action?: ActionEnumEnum;
    createdAt?: Date;
    createdBy?: string;
    objectName?: string;
    objectType?: ObjectTypeEnumEnum;
}
