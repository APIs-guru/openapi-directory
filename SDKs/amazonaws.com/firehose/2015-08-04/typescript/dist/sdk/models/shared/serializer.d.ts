import { SpeakeasyBase } from "../../../internal/utils";
import { OrcSerDe } from "./orcserde";
import { ParquetSerDe } from "./parquetserde";
/**
 * The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.
**/
export declare class Serializer extends SpeakeasyBase {
    orcSerDe?: OrcSerDe;
    parquetSerDe?: ParquetSerDe;
}
