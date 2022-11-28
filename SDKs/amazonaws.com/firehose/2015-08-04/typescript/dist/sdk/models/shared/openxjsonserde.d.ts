import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
**/
export declare class OpenXJsonSerDe extends SpeakeasyBase {
    caseInsensitive?: boolean;
    columnToJsonKeyMappings?: Map<string, string>;
    convertDotsInJsonKeysToUnderscores?: boolean;
}
