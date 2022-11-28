import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeEnumEnum } from "./objecttypeenumenum";
/**
 * Information about the type of an object in a merge operation.
**/
export declare class ObjectTypes extends SpeakeasyBase {
    base?: ObjectTypeEnumEnum;
    destination?: ObjectTypeEnumEnum;
    source?: ObjectTypeEnumEnum;
}
