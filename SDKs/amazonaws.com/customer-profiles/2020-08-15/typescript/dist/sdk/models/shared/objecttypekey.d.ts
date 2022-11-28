import { SpeakeasyBase } from "../../../internal/utils";
import { StandardIdentifierEnum } from "./standardidentifierenum";
/**
 * An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
**/
export declare class ObjectTypeKey extends SpeakeasyBase {
    fieldNames?: string[];
    standardIdentifiers?: StandardIdentifierEnum[];
}
