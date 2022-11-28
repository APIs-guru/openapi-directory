import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
**/
export declare class SourceDataTrimTitle extends SpeakeasyBase {
    defaultValue?: string;
    language?: string;
    separator?: string;
    sourceName: string;
}
