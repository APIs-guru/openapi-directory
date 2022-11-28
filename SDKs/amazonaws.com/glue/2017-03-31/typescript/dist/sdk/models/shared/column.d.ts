import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A column in a <code>Table</code>.
**/
export declare class Column extends SpeakeasyBase {
    comment?: string;
    name: string;
    parameters?: Map<string, string>;
    type?: string;
}
