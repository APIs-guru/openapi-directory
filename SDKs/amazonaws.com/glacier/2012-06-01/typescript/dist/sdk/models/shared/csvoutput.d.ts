import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QuoteFieldsEnum } from "./quotefieldsenum";
/**
 * Contains information about the comma-separated value (CSV) file that the job results are stored in.
**/
export declare class CsvOutput extends SpeakeasyBase {
    fieldDelimiter?: string;
    quoteCharacter?: string;
    quoteEscapeCharacter?: string;
    quoteFields?: QuoteFieldsEnum;
    recordDelimiter?: string;
}
