import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
**/
export declare class TextOptions extends SpeakeasyBase {
    analysisScheme?: string;
    defaultValue?: string;
    highlightEnabled?: boolean;
    returnEnabled?: boolean;
    sortEnabled?: boolean;
    sourceField?: string;
}
