import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileHeaderInfoEnum } from "./fileheaderinfoenum";


// CsvInput
/** 
 * Contains information about the comma-separated value (CSV) file to select from.
**/
export class CsvInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comments" })
  comments?: string;

  @Metadata({ data: "json, name=FieldDelimiter" })
  fieldDelimiter?: string;

  @Metadata({ data: "json, name=FileHeaderInfo" })
  fileHeaderInfo?: FileHeaderInfoEnum;

  @Metadata({ data: "json, name=QuoteCharacter" })
  quoteCharacter?: string;

  @Metadata({ data: "json, name=QuoteEscapeCharacter" })
  quoteEscapeCharacter?: string;

  @Metadata({ data: "json, name=RecordDelimiter" })
  recordDelimiter?: string;
}
