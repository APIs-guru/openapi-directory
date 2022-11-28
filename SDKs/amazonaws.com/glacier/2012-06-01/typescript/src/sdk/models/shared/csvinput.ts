import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileHeaderInfoEnum } from "./fileheaderinfoenum";



// CsvInput
/** 
 * Contains information about the comma-separated value (CSV) file to select from.
**/
export class CsvInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=FieldDelimiter" })
  fieldDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=FileHeaderInfo" })
  fileHeaderInfo?: FileHeaderInfoEnum;

  @SpeakeasyMetadata({ data: "json, name=QuoteCharacter" })
  quoteCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteEscapeCharacter" })
  quoteEscapeCharacter?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordDelimiter" })
  recordDelimiter?: string;
}
