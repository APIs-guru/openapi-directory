import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvHeaderOptionEnum } from "./csvheaderoptionenum";


// CsvClassifier
/** 
 * A classifier for custom <code>CSV</code> content.
**/
export class CsvClassifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowSingleColumn" })
  allowSingleColumn?: boolean;

  @Metadata({ data: "json, name=ContainsHeader" })
  containsHeader?: CsvHeaderOptionEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=DisableValueTrimming" })
  disableValueTrimming?: boolean;

  @Metadata({ data: "json, name=Header" })
  header?: string[];

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=QuoteSymbol" })
  quoteSymbol?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
