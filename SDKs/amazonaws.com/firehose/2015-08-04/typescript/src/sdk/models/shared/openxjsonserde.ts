import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpenXJsonSerDe
/** 
 * The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
**/
export class OpenXJsonSerDe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaseInsensitive" })
  caseInsensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ColumnToJsonKeyMappings" })
  columnToJsonKeyMappings?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ConvertDotsInJsonKeysToUnderscores" })
  convertDotsInJsonKeysToUnderscores?: boolean;
}
