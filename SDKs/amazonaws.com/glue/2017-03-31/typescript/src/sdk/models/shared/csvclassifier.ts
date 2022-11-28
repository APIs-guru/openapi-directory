import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";



// CsvClassifier
/** 
 * A classifier for custom <code>CSV</code> content.
**/
export class CsvClassifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowSingleColumn" })
  allowSingleColumn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ContainsHeader" })
  containsHeader?: CsvHeaderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=DisableValueTrimming" })
  disableValueTrimming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Header" })
  header?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteSymbol" })
  quoteSymbol?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
