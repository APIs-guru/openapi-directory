import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HiveJsonSerDe } from "./hivejsonserde";
import { OpenXJsonSerDe } from "./openxjsonserde";



// Deserializer
/** 
 * The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.
**/
export class Deserializer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HiveJsonSerDe" })
  hiveJsonSerDe?: HiveJsonSerDe;

  @SpeakeasyMetadata({ data: "json, name=OpenXJsonSerDe" })
  openXJsonSerDe?: OpenXJsonSerDe;
}
