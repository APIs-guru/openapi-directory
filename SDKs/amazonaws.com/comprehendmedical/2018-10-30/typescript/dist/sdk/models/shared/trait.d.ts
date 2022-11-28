import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameEnum } from "./attributenameenum";
/**
 *  Provides contextual information about the extracted entity.
**/
export declare class Trait extends SpeakeasyBase {
    name?: AttributeNameEnum;
    score?: number;
}
