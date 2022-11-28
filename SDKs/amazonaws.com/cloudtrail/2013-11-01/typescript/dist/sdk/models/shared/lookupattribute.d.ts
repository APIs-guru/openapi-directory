import { SpeakeasyBase } from "../../../internal/utils";
import { LookupAttributeKeyEnum } from "./lookupattributekeyenum";
/**
 * Specifies an attribute and value that filter the events returned.
**/
export declare class LookupAttribute extends SpeakeasyBase {
    attributeKey: LookupAttributeKeyEnum;
    attributeValue: string;
}
