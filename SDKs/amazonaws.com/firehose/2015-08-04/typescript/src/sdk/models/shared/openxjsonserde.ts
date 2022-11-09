import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpenXJsonSerDe
/** 
 * The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
**/
export class OpenXJsonSerDe extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaseInsensitive" })
  caseInsensitive?: boolean;

  @Metadata({ data: "json, name=ColumnToJsonKeyMappings" })
  columnToJsonKeyMappings?: Map<string, string>;

  @Metadata({ data: "json, name=ConvertDotsInJsonKeysToUnderscores" })
  convertDotsInJsonKeysToUnderscores?: boolean;
}
