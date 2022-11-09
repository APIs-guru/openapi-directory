import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FileHeaderInfoEnum } from "./fileheaderinfoenum";
/**
 * Contains information about the comma-separated value (CSV) file to select from.
**/
export declare class CsvInput extends SpeakeasyBase {
    comments?: string;
    fieldDelimiter?: string;
    fileHeaderInfo?: FileHeaderInfoEnum;
    quoteCharacter?: string;
    quoteEscapeCharacter?: string;
    recordDelimiter?: string;
}
