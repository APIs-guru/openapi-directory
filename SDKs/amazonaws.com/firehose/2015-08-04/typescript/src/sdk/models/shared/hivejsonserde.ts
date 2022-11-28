import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HiveJsonSerDe
/** 
 * The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
**/
export class HiveJsonSerDe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimestampFormats" })
  timestampFormats?: string[];
}
