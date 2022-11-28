import { SpeakeasyBase } from "../../../internal/utils";
import { TimestreamDimension } from "./timestreamdimension";
import { TimestreamTimestamp } from "./timestreamtimestamp";
/**
 * The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation.
**/
export declare class TimestreamAction extends SpeakeasyBase {
    databaseName: string;
    dimensions: TimestreamDimension[];
    roleArn: string;
    tableName: string;
    timestamp?: TimestreamTimestamp;
}
