import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that filters a message based on its attributes.
**/
export declare class FilterActivity extends SpeakeasyBase {
    filter: string;
    name: string;
    next?: string;
}
