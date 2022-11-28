import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuoteFieldsEnum } from "./quotefieldsenum";



// CsvOutput
/** 
 * Contains information about the comma-separated value (CSV) file that the job results are stored in.
**/
export class CsvOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FieldDelimiter" })
  fieldDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteCharacter" })
  quoteCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteEscapeCharacter" })
  quoteEscapeCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteFields" })
  quoteFields?: QuoteFieldsEnum;

  @SpeakeasyMetadata({ data: "json, name=RecordDelimiter" })
  recordDelimiter?: string;
}
