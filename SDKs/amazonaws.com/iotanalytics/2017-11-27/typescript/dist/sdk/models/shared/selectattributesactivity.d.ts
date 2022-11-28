import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to create a new message using only the specified attributes from the original message.
**/
export declare class SelectAttributesActivity extends SpeakeasyBase {
    attributes: string[];
    name: string;
    next?: string;
}
