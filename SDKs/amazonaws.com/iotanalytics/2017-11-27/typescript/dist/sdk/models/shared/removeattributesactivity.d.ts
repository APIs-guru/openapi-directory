import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that removes attributes from a message.
**/
export declare class RemoveAttributesActivity extends SpeakeasyBase {
    attributes: string[];
    name: string;
    next?: string;
}
