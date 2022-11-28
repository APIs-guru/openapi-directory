import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
**/
export declare class AttributeValue extends SpeakeasyBase {
    n?: number;
    s?: string;
    sdm?: Map<string, number>;
    sl?: string[];
}
