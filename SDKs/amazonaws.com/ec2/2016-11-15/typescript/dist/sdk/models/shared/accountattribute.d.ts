import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAttributeValue } from "./accountattributevalue";
/**
 * Describes an account attribute.
**/
export declare class AccountAttribute extends SpeakeasyBase {
    attributeName?: string;
    attributeValues?: AccountAttributeValue[];
}
