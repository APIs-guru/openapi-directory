import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuoteFieldsEnum } from "./quotefieldsenum";


// CsvOutput
/** 
 * Contains information about the comma-separated value (CSV) file that the job results are stored in.
**/
export class CsvOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FieldDelimiter" })
  fieldDelimiter?: string;

  @Metadata({ data: "json, name=QuoteCharacter" })
  quoteCharacter?: string;

  @Metadata({ data: "json, name=QuoteEscapeCharacter" })
  quoteEscapeCharacter?: string;

  @Metadata({ data: "json, name=QuoteFields" })
  quoteFields?: QuoteFieldsEnum;

  @Metadata({ data: "json, name=RecordDelimiter" })
  recordDelimiter?: string;
}
