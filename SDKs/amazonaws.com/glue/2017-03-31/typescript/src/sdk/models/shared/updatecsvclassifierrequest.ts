import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";



// UpdateCsvClassifierRequest
/** 
 * Specifies a custom CSV classifier to be updated.
**/
export class UpdateCsvClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowSingleColumn" })
  allowSingleColumn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ContainsHeader" })
  containsHeader?: CsvHeaderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=Delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=DisableValueTrimming" })
  disableValueTrimming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Header" })
  header?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteSymbol" })
  quoteSymbol?: string;
}
