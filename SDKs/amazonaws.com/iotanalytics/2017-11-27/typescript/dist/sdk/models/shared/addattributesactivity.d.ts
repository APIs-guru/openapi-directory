import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that adds other attributes based on existing attributes in the message.
**/
export declare class AddAttributesActivity extends SpeakeasyBase {
    attributes: Map<string, string>;
    name: string;
    next?: string;
}
