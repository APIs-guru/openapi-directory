import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
**/
export declare class TextArrayOptions extends SpeakeasyBase {
    analysisScheme?: string;
    defaultValue?: string;
    highlightEnabled?: boolean;
    returnEnabled?: boolean;
    sourceFields?: string;
}
