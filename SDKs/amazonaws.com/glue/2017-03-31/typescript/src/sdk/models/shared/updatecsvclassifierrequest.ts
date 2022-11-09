import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";


// UpdateCsvClassifierRequest
/** 
 * Specifies a custom CSV classifier to be updated.
**/
export class UpdateCsvClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowSingleColumn" })
  allowSingleColumn?: boolean;

  @Metadata({ data: "json, name=ContainsHeader" })
  containsHeader?: CsvHeaderOptionEnum;

  @Metadata({ data: "json, name=Delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=DisableValueTrimming" })
  disableValueTrimming?: boolean;

  @Metadata({ data: "json, name=Header" })
  header?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=QuoteSymbol" })
  quoteSymbol?: string;
}
